# admin-panel

https://gertvandormael.github.io/admin-panel/

# Challenge: Admin panel

|Challenge Parameters  |Challenge Details              |
|:---------------------|:------------------------------|
|Repository            |`admin-panel`                  |
|Challenge type        |`learning challenge`           |
|Duration              |`~2 days`                      |
|Deadline              |`04/07/2019 8h59`              |
|Deployment method     |`GitHub pages`                 |
|Group composition     |`groups of 3/4`                |


## Exercise

As a group of 3 or 4 people, you'll have to make the HTML and (S)CSS for an admin panel (adaptiveness included: mobile and desktop!), which you can find [here](https://startbootstrap.com/previews/sb-admin-2/). You only have to make the page that the link directs to. Functionality is only required for the parts that JavaScript is supplied for.

### Dropdown script 
**Carefull, this code does require a certain HTML structure!**
```javascript
//Makes an array of all the list-items that have a class "dropdown".
let drop_downs = document.querySelectorAll("li.dropdown");

//Iterates over every element of the array.
for (element of drop_downs) {
    
    //Adds a function to every dropdown that executes when you click.
    element.children[0].addEventListener("click", function(){
        
        //Removes active class of all open dropdowns that you did not click.
        for (elem of drop_downs) {
            if (this.parentNode != elem && elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
        }

        //Toggles the active class of the dropdown you clicked.
        this.parentNode.classList.toggle("active");
    });
}
```

### Rules of the game
* **No Bootstrap, only SASS**!
* Use partials! Your project should at least contain:
    * _reset.scss
    * _variables.scss
    * _mixins.scss
    * _components.scss
    * main.scss
* Avoid numbers in classnames!
* Use the colors as indicated at the bottom of the page!

## Goals

- [ ] Applying your knowledge of HTML.
- [ ] Applying your knowledge of (S)CSS.
- [ ] Learning to code DRY. (**D**on't **R**epeat **Y**ourself)
- [ ] Learning to resolve git conflicts.
- [ ] Learning to work in group effectively.
- [ ] Learning to communicate with group members
