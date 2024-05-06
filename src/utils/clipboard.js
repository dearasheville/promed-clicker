import clipboardy from 'clipboardy';

const clipboard = {
  read: () => {
    const data = clipboardy.readSync();
    const normalizaedData = String(data);

    return normalizaedData;
  },
  write: (data) => {
    const normalizaedData = String(data);

    clipboardy.writeSync(normalizaedData);
  },
};

export default clipboard;
