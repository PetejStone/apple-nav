import React from 'react';
import laptop from  '../../laptop.svg'
import display from  '../../display.svg';
import calculator from  '../../calculator.svg';
import drive from  '../../drive.svg';
import headphones from  '../../headphones.svg';
import appleinc from  '../../appleinc.svg';
import './Sublinks.css';

const Mac = props => {
    return (
        <div className="mac-list">

          <div >
          <img src={laptop} width="25px" height="25px"/>
          <p>Mac</p>
          </div>

          <div>
          <img src={laptop} width="25px" height="25px" />
          <p>Macbook Air</p>
          </div>

          <div>
          <img src={display} width="25px" height="25px" />
          <p>iMac</p>
          </div>

          <div>
          <img src={display} width="25px" height="25px" />
          <p>iMac Pro</p>
          </div>

          <div>
          <img src={calculator} width="25px" height="25px" />
          <p>Mac Pro</p>
          </div>

          <div>
          <img src={drive} width="25px" height="25px" />
          <p>Mac Mini</p>
          </div>

          <div>
          <img src={headphones} width="25px" height="25px" />
          <p>Accessories</p>
          </div>

          <div>
          <img src={appleinc} width="25px" height="25px" />
          <p>Mojave</p>
          </div>

          
        </div>
    )
}

export default Mac;