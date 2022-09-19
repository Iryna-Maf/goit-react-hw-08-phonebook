export const fields = {
  name: {
    label: 'Name',
    name: 'name',
    placeholder: 'input name',
    required: true,
    type: 'text',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  email: {
    label: 'Email',
    name: 'email',
    placeholder: 'input email',
    required: true,
    type: 'email',
    pattern: '([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})',
    title: 'Please enter correct email',
  },
  password: {
    label: 'Password',
    name: 'password',
    placeholder: 'input password',
    required: true,
    type: 'password',
    title: 'Please enter correct email',
  },
};
