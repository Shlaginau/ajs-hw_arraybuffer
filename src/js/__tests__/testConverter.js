import ArrayBufferConverter from '../ArrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

describe('ArrayBufferConverter', () => {
  test('should convert ArrayBuffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();

    converter.load(buffer);

    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toString()).toBe(expectedString);
  });

  test('should handle empty buffer', () => {
    const converter = new ArrayBufferConverter();

    expect(converter.toString()).toBe('empty');
  });
});
