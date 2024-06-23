import {atom} from 'recoil';

export const documentsAtom = atom<any[]>({
  key: 'documents',
  default: [],
});