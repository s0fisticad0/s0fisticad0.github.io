const icon = "data:image/png;base64,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"
class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilidades para servidor',
      name: 'server utulities',
     
      color1: '#83FF1B'
      
      color2: '#F2E34E',
      // variables y demas
      color3: '#ffffff',

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

Scratch.extensions.register(new server utilities());

