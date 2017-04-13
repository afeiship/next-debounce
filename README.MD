# next-debounce-throttle
> Debounce and throttle based on next toolkit.


## usage:
```html
<div class="actions">
  <button id="btn1">click fast!!!</button>
  <button id="btn2">click with debounce!!!</button>
  <button id="btn3">click with throttle!!!</button>
</div>

<script type="text/javascript">
  document.querySelector('#btn1').onclick = function () {
    console.log('click!');
  };

  document.querySelector('#btn2').onclick = function () {
   nx.debounce(function(){
     console.log('on click! with debounce!');
   },200)
  };

  document.querySelector('#btn3').onclick = function () {
    nx.throttle(function(){
      console.log('on click! with throttle!');
    },1000)
  };
</script>
```


## resources:
+ https://remysharp.com/2010/07/21/throttling-function-calls/


## todos:
- [ ] todo list..
