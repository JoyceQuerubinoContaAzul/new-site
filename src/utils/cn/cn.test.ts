import { cn } from './cn';

describe('Utils - cn helper', () => {
  it('should return an empty string when no input is provided', () => {
    const result = cn();

    expect(result).toBe('');
  });

  it('should handle a single class name as input', () => {
    const className = 'text-red-500';
    const result = cn(className);

    expect(result).toBe(className);
  });

  it('should merge multiple class names into a single string', () => {
    const className1 = 'text-red-500';
    const className2 = 'bg-black';
    const result = cn(className1, className2);

    expect(result).toBe([className1, className2].join(' '));
  });

  it('should ignore falsy values', () => {
    const className1 = 'text-red-500';
    const className2 = null;
    const className3 = undefined;
    const className4 = false;
    const result = cn(className1, className2, className3, className4);

    expect(result).toBe(className1);
  });

  it('should handle arrays of class names', () => {
    const classArray = ['text-red-500', 'bg-black'];
    const result = cn(...classArray);

    expect(result).toBe(classArray.join(' '));
  });

  it('should merge multiple object values into a single string', () => {
    const classObject1 = { 'text-red-500': true, 'bg-black': false };
    const classObject2 = { 'text-lg': true, 'p-4': false };
    const expectedResult = 'text-red-500 text-lg';

    const result = cn(classObject1, classObject2);

    expect(result).toBe(expectedResult);
  });

  it('should handle a mix of class names and object values', () => {
    const className1 = 'text-red-500';
    const className2 = 'text-lg';
    const classObject1 = { 'text-blue-500': true, 'p-4': false };
    const classObject2 = { hidden: true, block: false };
    const expectedResult = 'text-lg text-blue-500 hidden';

    const result = cn(className1, className2, classObject1, classObject2);

    expect(result).toBe(expectedResult);
  });

  it('should handle color class names with the typography class names', () => {
    const className1 = 'text-red-500';
    const className2 = 'text-title-h1';

    const result = cn(className1, className2);

    expect(result).toBe([className1, className2].join(' '));
  });
});
