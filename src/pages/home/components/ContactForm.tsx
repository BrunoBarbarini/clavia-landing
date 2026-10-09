import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const FORM_ENDPOINT = 'https://readdy.ai/api/form/db4mueprqll58fj4o9l0';

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formError, setFormError] = useState('');

  const inputClass =
    'w-full bg-transparent border-b border-clavia-offwhite/20 py-3 text-clavia-offwhite placeholder-clavia-offwhite/30 text-sm font-poppins focus:outline-none focus:border-clavia-lilac transition-colors duration-300';
  const labelClass = 'font-courier text-[10px] uppercase tracking-[0.3em] text-clavia-offwhite/45 mb-2 block';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get('company_alt') || '').trim();
    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }
    formData.delete('company_alt');

    setStatus('sending');
    setFormError('');

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, String(value));
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || '';
      const code = parsed?.code;
      const isSpam = typeof serverMsg === 'string' && serverMsg.toLowerCase().includes('spam');

      if (response.ok && code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setFormError(serverMsg || t('contact.form.error'));
        setStatus('error');
      }
    } catch {
      setFormError(t('contact.form.error'));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-clavia-lilac/30 rounded-lg p-10 bg-clavia-graphite-soft">
        <span className="w-12 h-12 flex items-center justify-center rounded-full border border-clavia-lilac/40 mb-6">
          <i className="ri-check-line text-clavia-lilac text-xl" />
        </span>
        <p className="font-poppins text-lg text-clavia-offwhite leading-snug">{t('contact.form.success')}</p>
      </div>
    );
  }

  return (
    <form
      id="clavia-contact-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="border border-clavia-graphite-line rounded-lg p-8 md:p-10 bg-clavia-graphite-soft"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <label className={labelClass} htmlFor="name">
            {t('contact.form.name')}
          </label>
          <input id="name" name="name" type="text" required placeholder={t('contact.form.name_ph')} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            {t('contact.form.email')}
          </label>
          <input id="email" name="email" type="email" required placeholder={t('contact.form.email_ph')} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            {t('contact.form.company')}
          </label>
          <input id="company" name="company" type="text" placeholder={t('contact.form.company_ph')} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="role">
            {t('contact.form.role')}
          </label>
          <input id="role" name="role" type="text" placeholder={t('contact.form.role_ph')} className={inputClass} />
        </div>
      </div>

      <div className="mt-7">
        <label className={labelClass} htmlFor="message">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={500}
          placeholder={t('contact.form.message_ph')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Anti-spam honeypot */}
      <div className="field-offscreen-note">
        <label htmlFor="company_alt">Company alt</label>
        <input
          id="company_alt"
          name="company_alt"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
      </div>

      {status === 'error' && (
        <p className="font-poppins text-sm text-clavia-lilac mt-6">{formError || t('contact.form.error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-9 inline-flex items-center justify-center gap-3 bg-clavia-offwhite text-clavia-graphite font-poppins text-sm font-medium px-8 py-4 rounded-full hover:bg-clavia-lilac transition-colors duration-300 cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
        <i className="ri-arrow-right-line text-sm" />
      </button>
    </form>
  );
}