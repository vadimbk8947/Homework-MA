// const root = document.getElementById('root');

// const container = document.createElement('div');
// const gallery = document.createElement('ul');
// const controls = document.createElement('div');
// const button = document.createElement('button');
// const galleryItem = document.createElement('li');

// const prev = button.cloneNode();
// const next = button.cloneNode();

// next.textContent = '->';
// prev.textContent = '<-';

// let currentIndex = 0;

// next.addEventListener('click', (event) => {
//   event.preventDefault();
//   gallery.style.transform = `translateX(-${640 * (currentIndex + 1)}px)`;
//   if (currentIndex !== refs.length - 2) {
//     currentIndex += 1;
//   }
// });

// prev.addEventListener('click', (event) => {
//   event.preventDefault();
//   gallery.style.transform = `translateX(-${640 * (currentIndex - 1)}px)`;
//   if (currentIndex > 0) {
//     currentIndex -= 1;
//   }
// });


// controls.append(prev);
// controls.append(next);



// //style components-------------------------------------------------------------
// // #div
// container.style.overflow = 'hidden';
// container.style.position = 'relative';

// // #ul
// gallery.style.listStyle = 'none';
// gallery.style.padding = 0;
// gallery.style.margin = 0;
// gallery.style.display = '-webkit-box';

// // # controls
// controls.style.display = 'flex';
// controls.style.justifyContent = 'center';
// controls.style.alignItems = 'center';

// // #buttons
// next.style.cursor = 'pointer';
// prev.style.cursor = 'pointer';
// next.style.outline = 'none';
// prev.style.outline = 'none';

// // #li
// galleryItem.style.maxWidth = root.clientWidth;
// galleryItem.style.maxHeight = root.clientHeight;
// galleryItem.style.objectFit = 'fill';


// //#img

// //style components-------------------------------------------------------------

// const imgs = refs.map(ref => {
//   const img = document.createElement('img');
//   img.alt = 'space image';
//   img.src = ref;

//   // #style img
//   img.style.height = '100%';
//   img.style.width = '100%';
//   // #style img

//   return img;
// });


// const list = imgs.map(img => {
//   const clonedListItem = galleryItem.cloneNode();
//   clonedListItem.append(img);
//   return clonedListItem;
// });

// list.forEach((li) => gallery.append(li));

// container.append(gallery);
// container.append(controls);
// root.append(container);


// class Slider {
//   constructor({ refs, acceptorSelector, }) {
//     this.refs = refs;
//     this.acceptor = document.querySelector(acceptorSelector);
//   }

//   _currentIndex = 0;

//   _container = document.createElement('div');
//   _gallery = document.createElement('ul');
//   _controls = document.createElement('div');
//   _button = document.createElement('button');
//   _galleryItem = document.createElement('li');

//   _prev = this._button.cloneNode();
//   _next = this._button.cloneNode();

//   _styleElements() {
//     // #div
//     this._container.style.overflow = 'hidden';
//     this._container.style.position = 'relative';

//     // #ul
//     this._gallery.style.listStyle = 'none';
//     this._gallery.style.padding = 0;
//     this._gallery.style.margin = 0;
//     this._gallery.style.display = '-webkit-box';

//     // # controls
//     this._controls.style.display = 'flex';
//     this._controls.style.justifyContent = 'center';
//     this._controls.style.alignItems = 'center';

//     // #buttons
//     this._next.style.cursor = 'pointer';
//     this._prev.style.cursor = 'pointer';
//     this._next.style.outline = 'none';
//     this._prev.style.outline = 'none';

//     // #li
//     this._galleryItem.style.maxWidth = root.clientWidth;
//     this._galleryItem.style.maxHeight = root.clientHeight;
//     this._galleryItem.style.objectFit = 'fill';
//   }

//   _editButtons() {
//     this._next.textContent = '->';
//     this._prev.textContent = '<-';

//     this._next.addEventListener('click', (event) => {
//       event.preventDefault();
//       this._gallery.style.transform = `translateX(-${640 * (this._currentIndex + 1)}px)`;
//       if (this._currentIndex !== refs.length - 2) {
//         this._currentIndex += 1;
//       }
//     });

//     this._prev.addEventListener('click', (event) => {
//       event.preventDefault();
//       this._gallery.style.transform = `translateX(-${640 * (this._currentIndex - 1)}px)`;
//       if (this._currentIndex > 0) {
//         this._currentIndex -= 1;
//       }
//     });
//   }

//   _createImgArray(refs) {
//     return refs.map(ref => {
//       const img = document.createElement('img');
//       img.alt = 'space image';
//       img.src = ref;

//       // #style img
//       img.style.height = '100%';
//       img.style.width = '100%';
//       // #style img

//       return img;
//     });
//   }

//   _createLiArray(imgs) {
//     return imgs.map(img => {
//       const clonedListItem = this._galleryItem.cloneNode();
//       clonedListItem.append(img);
//       return clonedListItem;
//     });
//   }

//   _insertItemsToList(list, items) {
//     items.forEach((item) => list.append(item));
//   }

//   _append(wrapper, elem) {
//     wrapper.append(elem);
//   }

//   render() {
//     // style elems
//     this._styleElements();

//     //add arrows and add event listeners
//     this._editButtons();

//     //rebase buttons to controls container
//     this._append(this._controls, this.next);
//     this._append(this._controls, this._prev);

//     //create array of images by refs from constructor(from arguments)
//     const imgs = this._createImgArray(this.refs);

//     //create array of li. Clone li and push image to li. Return aray of li
//     const list = this._createLiArray(imgs);

//     //insert li's to ul
//     this._insertItemsToList(this._gallery, list);

//     //root.append(container)

//     //push ul and controls div to our container
//     this._append(this._container, this._gallery);
//     this._append(this._container, this._controls);

//     this.acceptor.append(this._container);
//   }
// };


class Slider {
  constructor({ refs, acceptorSelector }) {
    this.refs = refs;
    this.acceptor = document.querySelector(acceptorSelector);
  }

  __currentIndex = 0;

  __container = document.createElement("div");
  __gallery = document.createElement("ul");
  __controls = document.createElement("div");
  __button = document.createElement("button");
  __galleryItem = document.createElement("li");

  __prev = this.__button.cloneNode();
  __next = this.__button.cloneNode();

  __styleElements() {
    // #contaciner
    this.__container.style.overflow = "hidden";
    this.__container.style.position = "relative";

    // #controls
    this.__controls.style.display = "flex";
    this.__controls.style.justifyContent = "center";
    this.__controls.style.alignItems = "center";

    // #buttons
    this.__next.style.cursor = "pointer";
    this.__prev.style.cursor = "pointer";
    this.__next.style.outline = "none";
    this.__prev.style.outline = "none";

    // #ul
    this.__gallery.style.listStyle = "none";
    this.__gallery.style.padding = 0;
    this.__gallery.style.margin = 0;
    this.__gallery.style.display = "-webkit-box";
    this.__gallery.style.height = root.clientHeight;

    // #li
    this.__galleryItem.style.maxWidth = root.clientWidth;
    this.__galleryItem.style.maxHeight = root.clientHeight;
    this.__galleryItem.style.width = root.clientWidth;
    this.__galleryItem.style.height = root.clientHeight;
    this.__galleryItem.style.objectFit = "fill";
  }

  __editButtons() {
    this.__prev.textContent = "<-";
    this.__next.textContent = "->";

    this.__next.addEventListener("click", (event) => {
      event.preventDefault();
      this.__gallery.style.transform = `translateX(-${640 * (this.__currentIndex + 1)}px)`;
      if (this.__currentIndex !== this.refs.length - 2) {
        this.__currentIndex += 1;
      }
    });
    this.__prev.addEventListener("click", (event) => {
      event.preventDefault();
      this.__gallery.style.transform = `translateX(-${640 * (this.__currentIndex - 1)}px)`;
      if (this.__currentIndex > 0) {
        this.__currentIndex -= 1;
      }
    });
  }

  __createImgArray(refs) {
    return refs.map((ref) => {
      const img = document.createElement("img");
      img.alt = "space image";
      img.src = ref;

      // #style img
      img.style.height = "100%";
      img.style.width = "100%";
      // #style img

      return img;
    });
  }

  __createLiArray(imgs) {
    return imgs.map((img) => {
      const clonedListItem = this.__galleryItem.cloneNode();
      clonedListItem.append(img);

      return clonedListItem;
    });
  }

  __insertItemsToList(list, items) {
    items.forEach((item) => list.append(item));
  }

  __append(wrapper, elem) {
    wrapper.append(elem);
  }

  render() {
    console.log("render", this);
    //style elems
    this.__styleElements();

    //add arrows and add event listeners
    this.__editButtons();

    //rebase buttons to controls container
    this.__append(this.__controls, this.__prev);
    this.__append(this.__controls, this.__next);

    // create array of images by refs from contructor(from args)
    const imgs = this.__createImgArray(this.refs);

    //create array of li. Clone li and push img to li. return array of li
    const lis = this.__createLiArray(imgs);

    //insert li's to ul
    this.__insertItemsToList(this.__gallery, lis);

    // root.append(container);

    //push ul and controls div to our container
    this.__append(this.__container, this.__gallery);
    this.__append(this.__container, this.__controls);

    this.acceptor.append(this.__container);
  }
}




