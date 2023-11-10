class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      return 'empty';
    }

    const bufferView = new Uint16Array(this.buffer);
    let result = '';

    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }

    return result;
  }
}

export default ArrayBufferConverter;
