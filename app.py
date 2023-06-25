from flask import Flask, request,render_template, redirect,flash,session
from flask_debugtoolbar import DebugToolbarExtension
import requests

app = Flask(__name__)


app.config['SECRET_KEY'] = 'woohoo!123'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/mynamesgif')

@app.route('/mynamesgif/play')
def game():
    urls=[]
    for i in range(25):
        r = requests.get('https://media2.giphy.com/media/1yT8JWzUXxE0GoNPEw/200w.gif?cid=fff15674b0542db6fd7d071e95dedff0e671584ef1d86ab1&ep=v1_gifs_random&rid=200w.gif&ct=g')
        print('************',r.status_code,'*************')
        gif_url = r.json()
        gif_url= gif_url['data']['images']['fixed_width']['url']
        urls.append(gif_url)

    return render_template('index.html',urls=urls)