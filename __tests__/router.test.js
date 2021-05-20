/**
 * @jest-environment jsdom
 */
 export const router = {};

 import { pushToHistory } from '../scripts/router.js';


 describe('correct length', () => {
    test('settings', () => {
        pushToHistory('settings'); 
        expect(history.length).toBe(2);
    });
  
    test('entry', () => {
        pushToHistory('entry', 1);  
        expect(history.length).toBe(3);
    });

    test('default', () => {
        pushToHistory('default');
        expect(history.length).toBe(4);
      });
  });
