
class DataManager {
  constructor() {
    this.storage = window.localStorage;
  }


  save(key, value) {
    try {
      const serializedData = JSON.stringify(value);
      this.storage.setItem(key, serializedData);
      console.log(`Дані з ключем ${key} успішно збережено.`);
    } catch (error) {
      console.error(`Помилка при збереженні даних: ${error.message}`);
    }
  }

  load(key) {
    try {
      const serializedData = this.storage.getItem(key);
      if (serializedData === null) {
        console.log(`Дані з ключем ${key} відсутні.`);
        return undefined;
      }
      const parsedData = JSON.parse(serializedData);
      console.log(`Дані з ключем ${key} успішно завантажено.`);
      return parsedData;
    } catch (error) {
      console.error(`Помилка при завантаженні даних: ${error.message}`);
    }
  }
}

export default DataManager;
