import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjDialogComponent } from '../proj-dialog/proj-dialog.component';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(proj: string) {
    if (proj == "Seam") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Seam Carver",
          image: "assets/SeamMerged.jpg",
          intro: "Seam-carving is a technique used for image resizing where the pixels removed are chosen in order to preserve the most interesting features of the image. This technique is a core feature of many photo-editing softwares and computer graphics applications.",
          description: "This project accomplishes a simplified version of seam carving in several steps. First, we calculate the 'energy' of each pixel of the image using the dual-gradient energy function, which measures the importance of each pixel. Then, it finds a horizontal or vertical seam of lowest total energy using Djikstra's shortest path algorithm. Lastly, the program removes these pixels from the image.",
          languages: "Java",
          gitLink: "https://github.com/amkumar645/Seam-Carver",
          pc: "https://www.cs.princeton.edu/"
        },
        autoFocus:false,
      });
    }

    if (proj == "Slider") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Slider Puzzle Solver",
          image: "assets/SliderMerged.jpg",
          intro: "A slider puzzle is a puzzle played on a n-by-n grid with square tiles from 1 to n*n-1 and a blank tile in a random order. The goal is to slide the tiles to be in order, but on any turn, you can only move tiles adjacent to the blank square into the blank square.",
          description: "This program is able to solve any solvable slider puzzle, as well as determine if a board is solvable or not. It accomplishes this using the A* search algorithm, making use of a minimum priority queue where the object of lowest priority is removed and replaced with its neighbors in each iteration. The priority of a tile is calculated using the Manhattan distance function.",
          languages: "Java",
          gitLink: "https://github.com/amkumar645/8-Puzzle-Solver",
          pc: "https://www.cs.princeton.edu/"
        },
        autoFocus:false,
      });
    }

    if (proj == "NBA") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "NBA Comparer",
          image: "assets/NBA4.png",
          intro: "As a big fan of basketball, I love comparing NBA players statistics in order to judge who's having a good season and who isn't. One day, when I was first learning Angular, I decided a great way to practice was to create a website dedicated to comparing NBA players' statistics against each other, so I did. As my first ever website, it has some issues, but the functionality is there.",
          description: "This website, while quite simple, has a lot of underlying processes. All the data came from merging preexisting datasets and adding in values by hand, and all the images were scraped from basketball-reference.com. The data covers years 1950-2020 completely, allowing the user to compare any two individual seasons in this range. In addition, there is a section where the user can view the data season-by-season, and sort it according to different statistics. Lastly, due to the changing nature of the NBA, there is a way to compare adjusted statistics, which standardizes based on season.",
          languages: "Angular, Python",
          gitLink: "https://github.com/amkumar645/NBA-Comparer",
          webLink: "https://nba-comparer.herokuapp.com/",
        },
        autoFocus:false,
      });
    }

    if (proj == "PW") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Personal Website",
          image: "assets/Web2.png",
          intro: "As more practice with making a functional website in Angular, I decided it was time to make my own portfolio website with Angular, Bootstrap, and Angular Material.",
          description: "This website contains loads of information and has lots of interactive features, including this dialog. If you like it and want to know more or think I'm a good fit for an internship, contact me using the information on the home page or on the contact page directly below this page.",
          languages: "Angular",
          gitLink: "https://github.com/amkumar645/Personal-Site",
        },
        autoFocus:false,
      });
    }

    if (proj == "FT") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "File Tree",
          image: "assets/File2.png",
          intro: "The Linux file system follows a clear tree structure, with both directories and files, where directories have children and files do not. This simple data structure makes the Linux file system very easy to use.",
          description: "To simulate the Linux file system in C, a node class that was able to differentiate between directories and files was created. The actual file tree structure uses this node class and a dynamic array class to allow for several normal file system operations, such as inserting paths, getting a file/directory, and removing a file/directory.",
          languages: "C",
          gitLink: "https://github.com/amkumar645/FileTree",
        },
        autoFocus:false,
      });
    }

    if (proj == "Piel") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Piel",
          image: "assets/Piel3.png",
          intro: "Even though AI has the potential to save thousands of lives in healthcare, it frequently underperforms on minority patients due to a lack of proper representation in datasets. Skin cancer is no exception. Out of 21 open-access datasets with a over 100,000 skin cancer images, only 10 images were self-identified as having brown skin.", 
          description: "For the Biomedical Entrepreneur Network Hackathon run by MLH, my brother and I decided to remedy this issue by creating an iPhone app that detects skin cancer in patients across all skin tones. To do this, we collected images across each of the different skin tones to create a more balanced training set. Then, we created a VGG-based Convolutional Neural Network to predict a skin cancer risk score based on a given image. Lastly, we used XCode to integrate the model into an iPhone app which allowed the user to input a photo, which the model then predicted a skin cancer risk probability for. This project went on to win first place at the BEN Hacks competition.",
          languages: "Python, Swift",
          slidesLink: "https://docs.google.com/presentation/d/1tkQlTwsZEU5eH1DXSbgSpfj7zQMoMvnwnTGeE7f49Bs/edit?usp=sharing"
        },
        autoFocus:false,
      });
    }

    if (proj == "Image") {
      this.dialog.open(ProjDialogComponent, {
        data: {
          title: "Image Classifier",
          image: "assets/Image2.png",
          intro: "Classifying handwritten numbers and other such images into categories is a central problem in machine learning.",
          description: "This project classifies images of some kind into groups through the supervised learning technique of the multi-perceptron algorithm. This algorithm combines several binary perceptrons in order to classify images into groups. Examples of potential images that can be used are digits from the MNIST dataset or doodles from Google's Quick, Draw!",
          languages: "Java",
          gitLink: "https://github.com/amkumar645/Image-Classifier",
          pc: "https://www.cs.princeton.edu/"
        },
        autoFocus:false,
      });
    }
    
  }

}
