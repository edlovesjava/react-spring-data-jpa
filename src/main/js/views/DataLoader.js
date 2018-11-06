'use strict';

class DataLoader  {

  constructor(apiRoot) {
    this.latestTodos = [];
    this.apiRoot = apiRoot;
  }

  fetchData() {
    return new Promise(resolve => {

      fetch(this.apiRoot)
        .then(response => response.json())
        .then(jsonData => {
          this.latestTodos = jsonData._embedded.todoItems;
          resolve( this.latestTodos );
        })
      })

    }

}

export default DataLoader;
