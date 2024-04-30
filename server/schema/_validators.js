import { z } from 'zod';

export const digits = (length) =>
  z
    .number()
    .int()
    .positive()
    .gt(+'1'.repeat(length - 1) * 9)
    .lte(10 ** length);

export const passwordValidator = z
  .string()
  .min(8, {
    message: 'Password must be minimum 8 characters long',
  })
  .refine((pass) => /[A-Z]/.test(pass), {
    message: 'Password must have an uppercase character',
  })
  .refine((pass) => /[a-z]/.test(pass), {
    message: 'Password must have a lowercase character',
  })
  .refine((pass) => /[0-9]/.test(pass), {
    message: 'Password must contain a number',
  })
  .refine((pass) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass), {
    message: 'Password must contain a symbol',
  })
  .refine((pass) => !/\s/.test(pass), {
    message: 'Password must NOT contain spaces',
  });

export const otpValidator = z
  .union([
    z.string().length(6),
    digits(6), // 6-digit
  ])
  .optional();
export const roleValidator = z
  .union([z.literal('user'), z.literal('recruiter'), z.literal('admin')], {
    description: 'Role can either be "user" or "Admin" or "recruiter"',
  })
  .default('user')
  .optional();

export const imageValidator = z
  .string()
  .regex(
    /data:image\/(png|jpg|webp|avif|svg\+xml);(base64|charset=UTF-8),.+/,
    {
      message:
        'Image Base64 url content type must be any of image/(png,jpg,avif,webp)',
    }
  );

export const futureDateValidator = z
  .string()
  .transform((val) => new Date(val))
  .pipe(z.date().min(new Date()));

export const pastDateValidator = z
  .string()
  .transform((val) => new Date(val))
  .pipe(z.date().max(new Date()));

export const dateValidator = z
  .string()
  .transform((val) => new Date(val))
  .pipe(z.date());
export default passwordValidator;
