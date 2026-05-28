import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector:'app-leaderboard',

  standalone:true,

  imports:[
    CommonModule
  ],

  templateUrl:'./leaderboard.html',

  styleUrl:'./leaderboard.scss'
})

export class Leaderboard {

  selectedBoard = 'activity';

  currentPage = 1;

  studentsPerPage = 5;

  topStudents = [

    {

      name:'Aryan Sharma',

      xp:2350,

      streak:38,

      image:'https://i.pravatar.cc/150?img=13',

      rank:2
    },

    {

      name:'Neeraj Sobhani',

      xp:2850,

      streak:42,

      image:'https://i.pravatar.cc/150?img=12',

      rank:1
    },

    {

      name:'Megha Patel',

      xp:2150,

      streak:35,

      image:'https://i.pravatar.cc/150?img=32',

      rank:3
    }

  ];

  academicTopStudents = [

    {

      name:'Aryan Sharma',

      percentage:'97%',

      subject:'Physics Topper',

      image:'https://i.pravatar.cc/150?img=13',

      rank:2
    },

    {

      name:'Neeraj Sobhani',

      percentage:'99%',

      subject:'Overall Topper',

      image:'https://i.pravatar.cc/150?img=12',

      rank:1
    },

    {

      name:'Megha Patel',

      percentage:'96%',

      subject:'Math Topper',

      image:'https://i.pravatar.cc/150?img=32',

      rank:3
    }

  ];

  nearbyStudents = [

    {

      rank:21,

      name:'Rohan Singh',

      score:'92%',

      tests:18,

      avg:'89%',

      image:'https://i.pravatar.cc/150?img=18'
    },

    {

      rank:22,

      name:'Ananya Gupta',

      score:'93%',

      tests:20,

      avg:'91%',

      image:'https://i.pravatar.cc/150?img=22'
    },

    {

      rank:23,

      name:'Neeraj Verma',

      score:'96%',

      tests:24,

      avg:'94%',

      image:'https://i.pravatar.cc/150?img=15',

      current:true
    },

    {

      rank:24,

      name:'Kunal Mehta',

      score:'90%',

      tests:17,

      avg:'87%',

      image:'https://i.pravatar.cc/150?img=28'
    },

    {

      rank:25,

      name:'Pooja Sharma',

      score:'88%',

      tests:16,

      avg:'85%',

      image:'https://i.pravatar.cc/150?img=45'
    },

    {

      rank:26,

      name:'Rahul Jain',

      score:'87%',

      tests:15,

      avg:'84%',

      image:'https://i.pravatar.cc/150?img=33'
    },

    {

      rank:27,

      name:'Simran Kaur',

      score:'91%',

      tests:19,

      avg:'88%',

      image:'https://i.pravatar.cc/150?img=52'
    },

    {

      rank:28,

      name:'Aditya Verma',

      score:'89%',

      tests:18,

      avg:'86%',

      image:'https://i.pravatar.cc/150?img=60'
    },

    {

      rank:29,

      name:'Priya Shah',

      score:'94%',

      tests:22,

      avg:'92%',

      image:'https://i.pravatar.cc/150?img=41'
    },

    {

      rank:30,

      name:'Sarthak Meena',

      score:'86%',

      tests:14,

      avg:'82%',

      image:'https://i.pravatar.cc/150?img=11'
    }

  ];

  badges = [

    {

      icon:'👑',

      title:'Consistency King',

      subtitle:'30 Day Streak'
    },

    {

      icon:'📚',

      title:'Notes Master',

      subtitle:'Opened 100+ Notes'
    },

    {

      icon:'⚡',

      title:'Fast Learner',

      subtitle:'Completed 20+ Quizzes'
    },

    {

      icon:'🎯',

      title:'Quiz Genius',

      subtitle:'90%+ Avg Score'
    },

    {

      icon:'🔥',

      title:'Attendance Hero',

      subtitle:'90%+ Attendance'
    }

  ];

  get paginatedStudents(){

    const start =
    (this.currentPage - 1)
    * this.studentsPerPage;

    const end =
    start + this.studentsPerPage;

    return this.nearbyStudents.slice(start,end);
  }

  get totalPages(){

    return Math.ceil(
      this.nearbyStudents.length /
      this.studentsPerPage
    );
  }

  nextPage(){

    if(this.currentPage < this.totalPages){

      this.currentPage++;
    }
  }

  previousPage(){

    if(this.currentPage > 1){

      this.currentPage--;
    }
  }
}