from flask import Flask, render_template
import string
import random
from models import Letter

app = Flask(__name__)


def generate_letters(num, uppercase=False):

  letters = []

  if uppercase:
    # Generate random uppercase
    for i in range(num):
      letter = random.choice(string.ascii_uppercase)
      letters.append(Letter(letter))

  else:
    # Generate lowercase in order
    for char in string.ascii_lowercase[:num]:
      letters.append(Letter(char))

  return letters

@app.route('/')
def index():

  uppercase_letters = generate_letters(4, uppercase=True)
  lowercase_letters = generate_letters(26)

  return render_template('index.html', uppercase_letters=uppercase_letters, lowercase_letters=lowercase_letters)


if __name__ == '__main__':
  app.run(debug=True)