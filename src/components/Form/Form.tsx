import { FC } from 'react';
import { IMaskInput } from 'react-imask';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../Button/Button';
import s from './Form.module.css';

export interface FormData {
  name: string;
  company: string;
  phone: string;
}

export type TFormProps = {
  setIsOpen: (art: boolean) => void;
};

export const Form: FC<TFormProps> = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const cleanedPhone = data.phone.replace(/\D/g, '');
    const formData = { ...data, phone: cleanedPhone };

    console.log('Данные формы:', formData);
    alert('Форма успешно отправлена!');
    setIsOpen(false);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Обратный звонок</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.inputContainer}>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            placeholder="Введите ваше имя"
            {...register('name', { required: 'Имя обязательно' })}
          />
          {errors.name && <span className={s.errorMessage}>{errors.name.message}</span>}
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="company">Компания:</label>
          <input id="company" placeholder="Введите название компании" {...register('company')} />
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="phone">Номер телефона:</label>
          <IMaskInput
            id="phone"
            mask="8-000-000-00-00"
            placeholder="Введите ваш номер телефона"
            {...register('phone', {
              required: 'Номер телефона обязателен',
              pattern: {
                value: /^8-\d{3}-\d{3}-\d{2}-\d{2}$/,
                message: 'Номер телефона должен быть в формате 8-999-999-99-99',
              },
            })}
            onAccept={(value) => {
              setValue('phone', value); // Обновляем значение в react-hook-form
            }}
          />
          {errors.phone && <span className={s.errorMessage}>{errors.phone.message}</span>}
        </div>
        <Button text="Отправить" />
      </form>
    </div>
  );
};
