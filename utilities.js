const icon = "data:image/jpeg;base64,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"
class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bananas are awesome. i like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());

