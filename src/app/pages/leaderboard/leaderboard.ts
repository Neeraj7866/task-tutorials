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

  nearbyStudents = [

    {

      rank:25,

      name:'Rohan Singh',

      streak:20,

      attendance:89,

      xp:1920,

      image:'https://i.pravatar.cc/150?img=18'
    },

    {

      rank:26,

      name:'Ananya Gupta',

      streak:19,

      attendance:90,

      xp:1870,

      image:'https://i.pravatar.cc/150?img=22'
    },

    {

      rank:27,

      name:'Neeraj Verma',

      streak:18,

      attendance:91,

      xp:1820,

      image:'https://i.pravatar.cc/150?img=15',

      current:true
    },

    {

      rank:28,

      name:'Kunal Mehta',

      streak:17,

      attendance:88,

      xp:1750,

      image:'https://i.pravatar.cc/150?img=28'
    },

    {

      rank:29,

      name:'Pooja Sharma',

      streak:16,

      attendance:87,

      xp:1680,

      image:'https://i.pravatar.cc/150?img=45'
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
}