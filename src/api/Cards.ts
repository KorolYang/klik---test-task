import axios from 'axios';
import { z } from 'zod';

export const CardSchema = z.object({
  image: z.string(),
  name: z.string(),
  description: z.string(),
});

export type TCard = z.infer<typeof CardSchema>;

export const CardListSchema = z.array(CardSchema);

export type TCardList = z.infer<typeof CardListSchema>;

export async function fetchCardList(): Promise<TCardList> {
  try {
    return await axios
      .get('https://run.mocky.io/v3/005d1584-c528-4d9f-9747-f55068eb7114')
      .then((response) => CardListSchema.parse(response.data));
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Ошибка валидации данных:', error.errors);
    } else {
      console.error('Ошибка при запросе данных:', error);
    }
    throw new Error('Не удалось загрузить данные');
  }
}
