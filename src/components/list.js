/*
list is responsible for creating a single list component
*/
const allLists = []

const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.title = title
      this.tasks = []
      this.id = id
      id++
      allLists.push(this)
    }

    addToSelector(){
      let dropdown = document.getElementById("parent-list")
      let option = document.createElement("option")
      option.setAttribute('id', `${this.id}`)

      option.text = (`${this.title}`)
      dropdown.add(option)
    }

    render (){
        let lists = document.getElementById('lists')

        var elem = document.createElement('DIV')
        elem.setAttribute('id',`${this.id}`)
        var text = document.createTextNode(`${this.title}`)

        elem.appendChild(text)
        lists.appendChild(elem)

    }
  }

})()
