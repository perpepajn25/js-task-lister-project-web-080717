class App {
  //your code here!
  constructor() {

  }

  render() {

  }

  deleteList() {

  }

  createList(event){
    event.preventDefault()

    let list = new List(document.getElementById('new-list-title').value)
    list.render()
    list.addToSelector()
    }

    createTask(event){
      event.preventDefault()
      let description = (document.getElementById('new-task-description').value)
      let priority = (document.getElementById('new-task-priority').value)
      let selections = document.getElementById("parent-list")
      let selectedOption = selections.options[selections.selectedIndex].id


      let lists = document.getElementById('lists')
      let allListDivs= lists.getElementsByTagName('div')

      // let finaldiv = allListDivs.forEach(function(l){
      //   if (l.id === selectedOption) {
      //     return l
      //   }
      //
      // })

      let task = new Task(description, priority, selectedOption)
        task.render()
        task.addTaskener()
      }



  addListtener(){
    let newList = document.getElementById("create-list-form")
    newList.addEventListener("submit",this.createList)
  }

  addTaskener(){
    let newTask = document.getElementById("create-task-form")
    newTask.addEventListener("submit", this.createTask)
  }


}
