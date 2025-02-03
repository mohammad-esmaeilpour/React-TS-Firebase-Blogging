export type TAboutData = {
  title: string;
  description: string;
  list: {
    title: string;
    description: string;
    list: { key: string; value: string }[];
  }[];
  about: {
    title: string;
    first_description: string;
    second_description: string;
  };
};
