const insert = document.getElementById("insert");

const key = document.querySelector(".key");

window.addEventListener("keydown", function (e) {
  key.innerHTML = `
    <div style="background-color: rgb(28, 28, 28); color: #ffffff; padding: 10px; border-radius: 5px; text-align: center; align-content: center;">
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === "" ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
    `;
});
