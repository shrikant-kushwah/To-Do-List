document.querySelector(".add").onclick = function()
{
    if(document.querySelector(".inputbox input").value == 0)
    {
        alert("Please Write Something ! ")
    }
    else
    {
        let list = document.querySelector(".list");
        let task = document.querySelector("#task").value;
        list.innerHTML +=`
        <div class="new_list">
        <div class="check">
            <input type="checkbox" id="checkbox">
        </div>
        <div class="text">
            <p>${task}</p>
        </div>
        <div class="del">
            <i class="fa-regular fa-x"></i>
        </div>
    </div>
        `;
        var del = document.querySelectorAll(".del");
        for(var i=0; i<del.length; i++)
        {
            del[i].onclick = function()
            {
                this.parentNode.remove();
            }
        }
    }
}
