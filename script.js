

function cloneFunction() {
  let itemsCount = document.querySelectorAll(".item").length;
  let uniqueClass = "item-" + (itemsCount + 1).toString();

  let item = document.querySelector(".template-item").cloneNode(true);
  item.classList.value = "item " + uniqueClass;

  if (itemsCount > 0) {
    let closeBtn = document.querySelector(".close-btn").cloneNode(true);
    closeBtn.classList.remove("d-none");

    closeBtn.onclick = () => {
      // e.preventDefault()
      // e.stopPropagation()

      // alert(uniqueClass);

      item.remove()
    }

    item.prepend(closeBtn);
  }

  // console.log(item);
  document.querySelector("#items").appendChild(item);

}




const prepareItem = (jQItemInput) => {

  // console.log({ icf: jQItemInput.find(".item-name").val() });

  let itemFromComponent = {
    pName: jQItemInput.find(".item-name").val(),
    pDesc: jQItemInput.find(".item-details").val(),
    PQuantity: jQItemInput.find(".item-quantity").val(),
    price: jQItemInput.find(".item-price").val(),
    tPrice: jQItemInput.find(".item-total").val()
  }

  // console.log({ item: itemFromComponent });
  // items.push(item);

  return itemFromComponent
}

const fullAddress = () => {
  // console.log({ due: $("#due") });
  let contact = {
    bName: $("#fname").val(),
    bMobile: $("#mNum").val(),
    bCountry: $("#country").val(),
    bDue: $("#due").is(":checked"),
    items: []
  }

  return contact;
}

$(document).ready(function () {
  $("#submit_btn").click(function (e) {

    e.preventDefault();
    let result = fullAddress();
    let finalItems = []

    // let itemComponents =document.querySelectorAll(".item");
    let itemComponents = $(".item");

    // console.log({ itemComponents });

    itemComponents.each(index => {
      let jQItem = $(itemComponents[index])

      // console.log({ ic: itemComponent });
      let finalItem = prepareItem(jQItem)

      finalItems.push(finalItem)
    });

    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(finalItems, '\t', 2);

    result.items = finalItems;

    console.log({ result });
  })
})
