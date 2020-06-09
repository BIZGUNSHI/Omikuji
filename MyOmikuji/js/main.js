'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click',()=>{
        const result = ['大吉','中吉','凶','末吉'];
        btn.textContent=result[Math.floor(Math.random()*result.length)];

    });
}