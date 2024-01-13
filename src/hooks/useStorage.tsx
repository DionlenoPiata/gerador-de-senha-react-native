import AsyncStorage from '@react-native-async-storage/async-storage';

interface UseStorage {
  getItem: (key: string) => Promise<any[]>;
  saveItem: (key: string, value: any) => Promise<void>;
  removeItem: (key: string, item: any) => Promise<any[] | undefined>;
}

const useStorage = (): UseStorage => {
  const getItem = async (key: string): Promise<any[]> => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords as string) || [];
    } catch (error) {
      console.log('Erro ao buscar', error);
      return [];
    }
  };

  const saveItem = async (key: string, value: any): Promise<void> => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log('Erro ao salvar', error);
    }
  };

  const removeItem = async (
    key: string,
    item: any,
  ): Promise<any[] | undefined> => {
    try {
      let passwords = await getItem(key);
      let myPasswords = passwords.filter(password => password !== item);
      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;
    } catch (error) {
      console.log('Erro ao deletar', error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
