'use strict';

var MazeData = {};

MazeData.config = {
    1: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_for"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_step_for"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_3,
                "content": Lang.Menus.maze_hints_content_3,
                "detail": Lang.Menus.maze_hints_detail_3,
                "image": 's1'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_7,
            "operation": {
                title: Lang.Menus.maze_operation7_title,
                content : [{
                    description: Lang.Menus.maze_operation7_1_desc,
                    contentStyle: 'operation7_1 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation7_1_textset_1,
                        x: -310,
                        y: 330
                    }, {
                        text: Lang.Menus.maze_operation7_1_textset_2,
                        x: 335,
                        y: 330
                    }]
                },{
                    description: Lang.Menus.maze_operation7_2_desc,
                    contentStyle: 'operation7_2 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation7_2_textset_1,
                        x: 387,
                        y: 305
                    }, {
                        text: Lang.Menus.maze_operation7_2_textset_2,
                        x: 455,
                        y: -90
                    }]
                },{
                    description: Lang.Menus.maze_operation7_3_desc,
                    contentStyle: 'operation7_3 ' + Lang.type,
                    descStyle: 'descStyle1'
                },{
                    description: Lang.Menus.maze_operation7_4_desc,
                    contentStyle: 'operation7_4 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation7_4_textset_1,
                        x: -360,
                        y: -110
                    }, {
                        text: Lang.Menus.maze_operation7_4_textset_2,
                        x: 345,
                        y: -110
                    }]
                }]
            },
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'for (var i = 0; i < <span class="textShadow">1</span>; i++){</br>}',
                    description: Lang.Menus.maze_command_for_desc,
                    images: ['for01','for02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'small',
                object: [{
                    type: 'small',
                    text: Lang.Menus.maze_object_friend,
                    class: 'friend',
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_7,
            "textContent": Lang.Menus.maze_text_content_7
        },
        "blockMenuAlign": "LEFT"
    },
    2: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 5,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_jump"}
            ],
            [
                {type: "maze_step_for"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_step_for"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_3,
                "content": Lang.Menus.maze_hints_content_3,
                "detail": Lang.Menus.maze_hints_detail_3,
                "image": 's2'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_8,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'for (var i = 0; i < <span class="textShadow">1</span>; i++){</br>}',
                    description: Lang.Menus.maze_command_for_desc,
                    images: ['for01','for02']
                }, {
                    command: 'jump();',
                    description: Lang.Menus.maze_command_jump_desc,
                    images: ['jump01','jump02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'small',
                object: [{
                    type: 'small',
                    text: Lang.Menus.maze_object_obstacle2,
                    class: 'obstacle2',
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_8,
            "textContent": Lang.Menus.maze_text_content_8
        },
        "blockMenuAlign": "LEFT"
    },
    3: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 7,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_repeat_until_1"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_repeat_until_1"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_4,
                "content": Lang.Menus.maze_hints_content_4,
                "detail": Lang.Menus.maze_hints_detail_4,
                "image": 's3'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_9,
            "operation": {
                title: Lang.Menus.maze_operation9_title,
                content : [{
                    description: Lang.Menus.maze_operation9_1_desc,
                    contentStyle: 'operation9_1 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation9_1_textset_1,
                        x: 155,
                        y: -90
                    }]
                },{
                    description: Lang.Menus.maze_operation9_2_desc,
                    contentStyle: 'operation9_2 ' + Lang.type,
                    descStyle: 'descStyle1'
                },{
                    description: Lang.Menus.maze_operation9_3_desc,
                    contentStyle: 'operation9_3 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation9_3_textset_1,
                        x: -345,
                        y: -160
                    }, {
                        text: Lang.Menus.maze_operation9_3_textset_2,
                        x: 365,
                        y: -160
                    }]
                }],
            },
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'while (true) {</br>}',
                    description: Lang.Menus.maze_command_while_desc,
                    images: ['while01','while02'],
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02'],
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02'],
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02'],
                }, ]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_9,
            "textContent": Lang.Menus.maze_text_content_9
        },
        "blockMenuAlign": "LEFT"
    },
    4: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 5,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_repeat_until_1"}
            ],
            [
                {type: "maze_step_if_1"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_repeat_until_1",
                "maze_step_if_1"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_5,
                "content": Lang.Menus.maze_hints_content_5,
                "detail": Lang.Menus.maze_hints_detail_5,
                "image": 's4'
            },
            {
                "title": Lang.Menus.maze_hints_title_4,
                "content": Lang.Menus.maze_hints_content_4,
                "detail": Lang.Menus.maze_hints_detail_4,
                "image": 's3'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_10,
            "operation": {
                title: Lang.Menus.maze_operation10_title,
                content : [{
                    description: Lang.Menus.maze_operation10_1_desc,
                    contentStyle: 'operation10_1 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation10_1_textset_1,
                        x: 435,
                        y: 320
                    }, {
                        text: Lang.Menus.maze_operation10_1_textset_2,
                        x: 435,
                        y: 260
                    }, {
                        text: Lang.Menus.maze_operation10_1_textset_3,
                        x: 435,
                        y: -40
                    }, {
                        text: Lang.Menus.maze_operation10_1_textset_4,
                        x: 435,
                        y: -100
                    }]
                },{
                    description: Lang.Menus.maze_operation10_2_desc,
                    contentStyle: 'operation10_2 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation10_2_textset_1,
                        x: -25,
                        y: 270
                    }, {
                        text: Lang.Menus.maze_operation10_2_textset_2,
                        x: 115,
                        y: -125
                    }]
                },{
                    description: Lang.Menus.maze_operation10_3_desc,
                    contentStyle: 'operation10_3 ' + Lang.type,
                    descStyle: 'descStyle2',
                    textSet:[{
                        text: Lang.Menus.maze_operation10_3_textset_1,
                        x: -28,
                        y: 270
                    }, {
                        text: Lang.Menus.maze_operation10_3_textset_2,
                        x: 125,
                        y: -125
                    }]
                },{
                    description: Lang.Menus.maze_operation10_4_desc,
                    contentStyle: 'operation10_4 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        align: 'left',
                        text: Lang.Menus.maze_operation10_4_textset_1,
                        x: -535,
                        y: -75
                    }, {
                        align: 'left',
                        text: Lang.Menus.maze_operation10_4_textset_2,
                        x: -105,
                        y: -75
                    }, {
                        align: 'left',
                        text: Lang.Menus.maze_operation10_4_textset_3,
                        x: 315,
                        y: -75
                    }]
                }],
            },
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'if (front == \"wall\") {</br>}',
                    description: Lang.Menus.maze_command_if1_desc,
                    images: ['if01','if02']
                }, {
                    command: 'while (true) {</br>}',
                    description: Lang.Menus.maze_command_while_desc,
                    images: ['while01','while02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'big',
                object: [{
                    type: 'big',
                    text: Lang.Menus.maze_object_wall2,
                    class: 'wall2',
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_10,
            "textContent": Lang.Menus.maze_text_content_10
        },
        "blockMenuAlign": "LEFT"
    },
    5: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 5,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_repeat_until_1"}
            ],
            [
                {type: "maze_step_if_1"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_repeat_until_1",
                "maze_step_if_1"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_5,
                "content": Lang.Menus.maze_hints_content_5,
                "detail": Lang.Menus.maze_hints_detail_5,
                "image": 's5'
            },
            {
                "title": Lang.Menus.maze_hints_title_4,
                "content": Lang.Menus.maze_hints_content_4,
                "detail": Lang.Menus.maze_hints_detail_4,
                "image": 's4'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_11,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'if (front == \"wall\") {</br>}',
                    description: Lang.Menus.maze_command_if1_desc,
                    images: ['if01','if02']
                }, {
                    command: 'while (true) {</br>}',
                    description: Lang.Menus.maze_command_while_desc,
                    images: ['while01','while02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'big',
                object: [{
                    type: 'big',
                    text: Lang.Menus.maze_object_wall2,
                    class: 'wall2',
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_11,
            "textContent": Lang.Menus.maze_text_content_11
        },
        "blockMenuAlign": "LEFT"
    },
    6: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 7,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_jump"}
            ],
            [
                {type: "maze_repeat_until_1"}
            ],
            [
                {type: "maze_step_if_1"}
            ],
            [
                {type: "maze_step_if_2"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_repeat_until_1",
                "maze_step_if_1",
                "maze_step_if_2"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_5,
                "content": Lang.Menus.maze_hints_content_5,
                "detail": Lang.Menus.maze_hints_detail_5,
                "image": 's6'
            },
            {
                "title": Lang.Menus.maze_hints_title_4,
                "content": Lang.Menus.maze_hints_content_4,
                "detail": Lang.Menus.maze_hints_detail_4,
                "image": 's4'
            }

        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_12,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'if (front == \"bee\") {</br>}',
                    description: Lang.Menus.maze_command_if2_desc,
                    images: ['if03','if04']
                }, {
                    command: 'if (front == \"wall\") {</br>}',
                    description: Lang.Menus.maze_command_if1_desc,
                    images: ['if01','if02']
                }, {
                    command: 'while (true) {</br>}',
                    description: Lang.Menus.maze_command_while_desc,
                    images: ['while01','while02']
                }, {
                    command: 'jump();',
                    description: Lang.Menus.maze_command_jump_desc,
                    images: ['jump01','jump02']
                },  {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'big',
                object: [{
                    type: 'big',
                    text: Lang.Menus.maze_object_wall2,
                    class: 'wall2',
                }, {
                    type: 'small',
                    text: Lang.Menus.maze_object_obstacle2,
                    class: 'obstacle2',
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_12,
            "textContent": Lang.Menus.maze_text_content_12
        },
        "blockMenuAlign": "LEFT"
    },
    7: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 8,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_for"}
            ],
            [
                {type: "maze_repeat_until_2"}
            ],

        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_repeat_until_2"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_6,
                "content": Lang.Menus.maze_hints_content_6,
                "detail": Lang.Menus.maze_hints_detail_6,
                "image": 's7'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_13,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'while (true) {</br>}',
                    description: Lang.Menus.maze_command_while_desc,
                    images: ['while01','while02']
                }, {
                    command: 'for (var i = 0; i < <span class="textShadow">1</span>; i++){</br>}',
                    description: Lang.Menus.maze_command_for_desc,
                    images: ['for01','for02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_13,
            "textContent": Lang.Menus.maze_text_content_13
        },
        "blockMenuAlign": "LEFT"
    },
    8: {
        "gridSize": {
            width: 8,
            height: 7
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze2/",
        "limitBlockCnt": 9,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_for"}
            ],
            [
                {type: "maze_repeat_until_2"}
            ],

        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_repeat_until_2"
            ]
        },
        "canvasRegX": 34,
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_7,
                "content": Lang.Menus.maze_hints_content_7,
                "detail": Lang.Menus.maze_hints_detail_7,
                "image": 's8'
            },
            {
                "title": Lang.Menus.maze_hints_title_6,
                "content": Lang.Menus.maze_hints_content_6,
                "detail": Lang.Menus.maze_hints_detail_6,
                "image": 's6'
            },
            {
                "title": Lang.Menus.maze_hints_title_4,
                "content": Lang.Menus.maze_hints_content_4,
                "detail": Lang.Menus.maze_hints_detail_4,
                "image": 's4'
            }

        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_14,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'while (true) {</br>}',
                    description: Lang.Menus.maze_command_while_desc,
                    images: ['while01','while02']
                }, {
                    command: 'for (var i = 0; i < <span class="textShadow">1</span>; i++){</br>}',
                    description: Lang.Menus.maze_command_for_desc,
                    images: ['for01','for02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_14,
            "textContent": Lang.Menus.maze_text_content_14
        },
        "blockMenuAlign": "LEFT"
    },
    9: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze3/",
        "limitBlockCnt": 8,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_call_function"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_call_function"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_8,
                "content": Lang.Menus.maze_hints_content_8,
                "detail": Lang.Menus.maze_hints_detail_8,
                "image": 'x1'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_15,
            "operation": {
                title: Lang.Menus.maze_operation15_title,
                content : [{
                    description: Lang.Menus.maze_operation15_1_desc,
                    contentStyle: 'operation15_1 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation15_1_textset_1,
                        x: -475,
                        y: -290
                    }, {
                        text: Lang.Menus.maze_operation15_1_textset_2,
                        x: -25,
                        y: -165
                    }, {
                        text: Lang.Menus.maze_operation15_1_textset_3,
                        x: 460,
                        y: -130
                    }]
                },{
                    description: Lang.Menus.maze_operation15_2_desc,
                    contentStyle: 'operation15_2 ' + Lang.type,
                    descStyle: 'descStyle3',
                    textSet:[{
                        text: Lang.Menus.maze_operation15_2_textset_1,
                        x: -25,
                        y: 260
                    }, {
                        text: Lang.Menus.maze_operation15_2_textset_2,
                        x: 140,
                        y: -115
                    }]
                },{
                    description: Lang.Menus.maze_operation15_3_desc,
                    contentStyle: 'operation15_3 ' + Lang.type,
                    descStyle: 'descStyle2',
                    textSet:[{
                        text: Lang.Menus.maze_operation15_3_textset_1,
                        x: -25,
                        y: 320
                    }, {
                        text: Lang.Menus.maze_operation15_3_textset_2,
                        x: 140,
                        y: -170
                    }]
                },{
                    description: Lang.Menus.maze_operation15_4_desc,
                    contentStyle: 'operation15_4 ' + Lang.type,
                    descStyle: 'descStyle2',
                    textSet:[{
                        text: Lang.Menus.maze_operation15_4_textset_1,
                        x: -495,
                        y: 385
                    }, {
                        text: Lang.Menus.maze_operation15_4_textset_2,
                        x: -495,
                        y: -215
                    }, {
                        text: Lang.Menus.maze_operation15_4_textset_3,
                        x: 415,
                        y: 250
                    }]
                }]
            },
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'promise();',
                    description: Lang.Menus.maze_command_promise_desc,
                    images: ['promise01','promise02'],
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02'],
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02'],
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02'],
                }]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'small',
                object: [{
                    type: 'small',
                    text: Lang.Menus.maze_object_battery,
                    class: 'battery',
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_15,
            "textContent": Lang.Menus.maze_text_content_15
        },
        "blockMenuAlign": "LEFT"
    },
    10: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze3/",
        "limitBlockCnt": 9,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_call_function"}
            ]
        ],
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_8,
                "content": Lang.Menus.maze_hints_content_8,
                "detail": Lang.Menus.maze_hints_detail_8,
                "image": 'x2'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_16,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'promise();',
                    description: Lang.Menus.maze_command_promise_desc,
                    images: ['promise01','promise02'],
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02'],
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02'],
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02'],
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_16,
            "textContent": Lang.Menus.maze_text_content_16
        },
        "blockMenuAlign": "LEFT",
        "essentialBlockInfo": {
            blocks: [
                "maze_call_function"
            ]
        },
    },
    11: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze3/",
        "limitBlockCnt": 9,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_jump"}
            ],
            [
                {type: "maze_call_function"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_call_function"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_8,
                "content": Lang.Menus.maze_hints_content_8,
                "detail": Lang.Menus.maze_hints_detail_8,
                "image": 'x3'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_17,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'promise();',
                    description: Lang.Menus.maze_command_promise_desc,
                    images: ['promise01','promise02']
                }, {
                    command: 'jump();',
                    description: Lang.Menus.maze_command_jump_desc,
                    images: ['jump01','jump02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_17,
            "textContent": Lang.Menus.maze_text_content_17
        },
        "blockMenuAlign": "LEFT"
    },
    12: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze3/",
        "limitBlockCnt": 14,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_call_function"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_call_function"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_8,
                "content": Lang.Menus.maze_hints_content_8,
                "detail": Lang.Menus.maze_hints_detail_8,
                "image": 'x4'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_19,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'promise();',
                    description: Lang.Menus.maze_command_promise_desc,
                    images: ['promise01','promise02'],
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02'],
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02'],
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02'],
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_19,
            "textContent": Lang.Menus.maze_text_content_19
        },
        "blockMenuAlign": "LEFT"
    },
    13: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze3/",
        "limitBlockCnt": 14,
        "availableCode": [
            [
                {type: "maze_step_move_step"}
            ],
            [
                {type: "maze_step_rotate_left"}
            ],
            [
                {type: "maze_step_rotate_right"}
            ],
            [
                {type: "maze_step_jump"}
            ],
            [
                {type: "maze_call_function"}
            ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "maze_call_function"
            ]
        },
        "hints": [
            {
                "title": Lang.Menus.maze_hints_title_8,
                "content": Lang.Menus.maze_hints_content_8,
                "detail": Lang.Menus.maze_hints_detail_8,
                "image": 'x5'
            }
        ],
        "popups": {
            "objective": Lang.Menus.maze_text_goal_20,
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [{
                    command: 'promise();',
                    description: Lang.Menus.maze_command_promise_desc,
                    images: ['promise01','promise02']
                }, {
                    command: 'jump();',
                    description: Lang.Menus.maze_command_jump_desc,
                    images: ['jump01','jump02']
                }, {
                    command: 'right();',
                    description: Lang.Menus.maze_command_right_desc,
                    images: ['right01','right02']
                }, {
                    command: 'left();',
                    description: Lang.Menus.maze_command_left_desc,
                    images: ['left01','left02']
                }, {
                    command: 'move();',
                    description: Lang.Menus.maze_command_move_desc,
                    images: ['move01','move02']
                }]
            }
        },
        "intro": {
            "content": Lang.Menus.maze_content_20,
            "textContent": Lang.Menus.maze_text_content_20
        },
        "blockMenuAlign": "LEFT"
    }
}

/*
 * Generate tile entities. wall and road only.
 */
MazeData.tileMap = {
    1: [
        ["wall_08","wall_08","wall_08","wall_08","wall_08","wall_08","wall_08"],
        ["wall_08","wall_08","wall_08","wall_08","wall_08","wall_08","wall_08"],
        ["wall_01","road_09","road_09","road_09","road_09","road_09","road_09"],
        ["wall_08","wall_08","wall_08","wall_08","wall_08","wall_08","wall_08"],
        ["wall_08","wall_08","wall_08","wall_08","wall_08","wall_08","wall_08"]
    ],
    2: [
        ["wall_08","wall_08","wall_07","wall_01","wall_01","wall_02","wall_08"],
        ["road_09","road_09","road_09","road_09","road_06","wall_03","wall_08"],
        ["wall_02","wall_08","wall_07","wall_04","road_10","wall_06","wall_08"],
        ["wall_08","wall_04","wall_07","wall_01","road_10","wall_06","wall_08"],
        ["wall_08","wall_07","wall_02","wall_03","road_10","wall_06","wall_09"],
        ["road_09","road_09","road_09","road_09","road_08","wall_06","wall_06"]
    ],
    3: [
        ["wall_08","wall_08","wall_07","wall_01","wall_08","wall_04","wall_03"],
        ["wall_02","wall_08","wall_07","wall_04","wall_03","road_05","road_09"],
        ["wall_03","wall_01","wall_07","road_05","road_09","road_08","wall_07"],
        ["wall_02","road_05","road_09","road_08","wall_08","wall_08","wall_07"],
        ["road_09","road_08","wall_01","wall_03","wall_08","wall_08","wall_07"]
    ],
    4: [
        ["wall_08","wall_07","wall_08","wall_08","wall_07","wall_08","wall_08"],
        ["wall_08","road_05","road_11","road_11","road_11","road_06","wall_08"],
        ["wall_08","road_12","wall_08","wall_08","wall_07","road_12","wall_08"],
        ["wall_08","road_12","wall_08","wall_08","wall_07","road_12","wall_08"],
        ["wall_08","road_12","wall_08","road_09","road_09","road_08","wall_08"]
    ],
    5: [
        ["wall_06","wall_06","wall_08","wall_06","wall_06","wall_08","wall_06"],
        ["wall_06","road_05","road_09","road_09","road_09","road_06","wall_06"],
        ["wall_06","road_12","wall_08","wall_06","wall_06","road_10","wall_06"],
        ["wall_06","road_12","wall_08","wall_06","wall_06","road_10","wall_06"],
        ["wall_06","road_07","road_09","road_09","wall_06","road_10","wall_06"],
        ["wall_06","wall_06","wall_08","wall_06","wall_06","road_10","wall_06"]
    ],
    6: [
        ["wall_06","wall_06","wall_08","wall_06","wall_06","wall_08","wall_06"],
        ["road_05","road_09","road_09","road_09","road_09","road_09","road_06"],
        ["road_10","wall_06","wall_08","wall_06","wall_06","wall_06","road_10"],
        ["road_10","wall_06","wall_08","wall_06","wall_06","wall_06","road_10"],
        ["road_10","wall_06","wall_06","wall_06","wall_06","wall_06","road_10"],
        ["road_07","road_09","road_09","road_09","wall_06","wall_06","road_10"]
    ],
    7: [
        ["wall_06","wall_01","wall_08","wall_02","wall_04","wall_06","wall_06"],
        ["road_13","road_13","road_13","road_13","road_13","wall_06","wall_06"],
        ["road_13","road_13","road_13","road_13","road_13","wall_06","wall_06"],
        ["road_13","road_13","road_13","road_13","road_13","wall_06","wall_06"],
        ["road_13","road_13","road_13","road_13","road_13","wall_06","wall_06"],
        ["road_13","road_13","road_13","road_13","road_13","wall_06","wall_06"]
    ],
    8: [
        ["wall_06","road_05","road_09","road_06","wall_06","road_05","road_09","road_06","wall_06"],
        ["wall_06","road_10","wall_02","road_10","wall_06","road_10","wall_03","road_10","wall_06"],
        ["wall_06","road_07","road_09","road_14","road_14","road_14","road_09","road_08","wall_06"],
        ["wall_06","wall_08","wall_08","road_10","wall_04","road_10","wall_08","wall_08","wall_06"],
        ["wall_06","road_05","road_09","road_14","road_14","road_14","road_09","road_06","wall_06"],
        ["wall_06","road_10","wall_02","road_10","wall_06","road_10","wall_03","road_10","wall_06"],
        ["wall_06","road_07","road_09","road_08","wall_06","road_07","road_09","road_08","wall_06"]
    ],
    9: [
        ["wall_13","wall_14","wall_11","wall_09","wall_10","wall_02","wall_07"],
        ["wall_12","wall_13","road_03","road_04","road_02","wall_02","wall_02"],
        ["wall_13","wall_14","wall_08","wall_10","road_05","wall_13","wall_02"],
        ["wall_14","wall_12","road_02","road_04","road_02","wall_14","wall_02"],
        ["wall_13","wall_14","wall_09","wall_08","wall_11","wall_13","wall_06"]
    ],
    10: [
        ["wall_14","wall_10","wall_09","wall_11","wall_08","wall_03","wall_07"],
        ["wall_11","road_02","road_01","road_01","road_02","wall_10","wall_02"],
        ["wall_09","road_05","wall_09","wall_10","road_05","wall_11","wall_02"],
        ["wall_08","road_02","wall_14","wall_13","road_02","wall_09","wall_02"],
        ["wall_13","road_01","wall_14","wall_14","road_01","wall_14","wall_06"]
    ],
    11: [
        ["wall_13","wall_13","wall_12","wall_14","wall_03","wall_05","wall_07"],
        ["wall_13","road_01","road_03","road_02","road_05","road_04","wall_02"],
        ["wall_06","wall_04","wall_09","wall_08","wall_11","road_03","wall_02"],
        ["wall_04","wall_04","wall_11","wall_10","wall_09","road_05","wall_13"],
        ["wall_07","wall_04","wall_08","wall_09","wall_10","road_05","wall_14"],
        ["wall_13","road_04","road_02","road_03","road_05","road_01","wall_13"]
    ],
    12: [
        ["wall_06","wall_03","wall_03","wall_03","wall_03","wall_03","wall_07"],
        ["wall_12","wall_14","wall_12","wall_14","wall_12","wall_13","road_04"],
        ["wall_10","wall_09","wall_11","wall_08","wall_09","wall_11","road_04"],
        ["road_03","road_02","road_01","wall_09","road_01","road_02","road_01"],
        ["wall_08","wall_11","road_03","wall_10","road_01","wall_11","wall_04"],
        ["wall_10","wall_09","road_05","road_03","road_02","wall_03","wall_06"]
    ],
    13: [
        ["wall_14","wall_12","wall_14","wall_12","wall_14","wall_12","wall_06"],
        ["wall_08","wall_11","road_01","road_03","road_01","wall_14","wall_14"],
        ["wall_10","wall_09","road_01","wall_08","road_01","road_02","road_01"],
        ["road_04","road_03","road_03","wall_03","wall_03","wall_07","road_03"],
        ["road_04","wall_11","wall_10","wall_14","wall_14","road_01","road_05"],
        ["road_01","road_02","road_03","wall_03","wall_03","wall_03","wall_03"]
    ]
};

MazeData.fence_behind = {

}

MazeData.fence_front = {

}

MazeData.obstacle = {
    2: [
        {image: 'obstacle_01', x:1, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:3, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:4, y:2, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:4, y:4, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:1, y:5, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:3, y:5, type: Ntry.STATIC.OBSTACLE_BEE}
    ],
    6: [
        {image: 'obstacle_01', x:0, y:3, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:3, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_01', x:6, y:3, type: Ntry.STATIC.OBSTACLE_BEE}
    ],
    11: [
        {image: 'obstacle_01', x:4, y:1, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'obstacle_01', x:5, y:4, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'obstacle_01', x:2, y:5, type: Ntry.STATIC.OBSTACLE_BANANA}
    ],
    13: [
        {image: 'obstacle_01', x:0, y:4, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'obstacle_01', x:3, y:1, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'obstacle_01', x:6, y:3, type: Ntry.STATIC.OBSTACLE_BANANA}
    ]
};

MazeData.START = {
    type: "maze_step_start",
    x: 50,
    y: 30,
    movable: false,
    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
};

MazeData.player = {
    1: {
        x: 1,
        y: 2,
        code: [
            [
                MazeData.START,
                {
                    type: "maze_step_for",
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    params: [1],
                    statements: [
                        [
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    2: {
        x: 0,
        y: 1,
        code: [
            [
                MazeData.START
            ]
        ]
    },
    3: {
        x: 0,
        y: 4,
        code: [
            [
                MazeData.START
            ]
        ]
    },
    4: {
        x: 1,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                MazeData.START,
                {
                    type: "maze_repeat_until_1",
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    params : [1],
                    statements : [
                        [
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_if_1",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            }
                        ]
                    ]
                }

            ]
        ]
    },
    5: {
        x: 5,
        y: 5,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                MazeData.START
            ]
        ]
    },
    6: {
        x: 6,
        y: 5,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                MazeData.START
            ]
        ]
    },
    7: {
        x: 0,
        y: 4,
        code: [
            [
                MazeData.START
            ]
        ]
    },
    8: {
        x: 4,
        y: 2,
        direction: Ntry.STATIC.WEST,
        code: [
            [
                MazeData.START
            ]
        ]
    },
    9: {
        x: 2,
        y: 1,
        code: [
            [
                MazeData.START
            ],
            [
                { type: "maze_define_function",
                    x: 270,
                    y: 30,
                    movable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    statements: [
                        [
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_rotate_right",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    10: {
        x: 4,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                MazeData.START,
                {
                    type : "maze_call_function",
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                },
                {
                    type : "maze_call_function",
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                },
                {
                    type : "maze_call_function",
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ],
            [
                { type: "maze_define_function",
                    x: 270,
                    y: 30,
                    movable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    11: {
        x: 1,
        y: 1,
        code: [
            [
                MazeData.START
            ],
            [
                { type: "maze_define_function",
                    x: 270,
                    y: 30,
                    movable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    12: {
        x: 0,
        y: 3,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                MazeData.START
            ],
            [
                { type: "maze_define_function",
                    x: 270,
                    y: 30,
                    movable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    statements: [
                        [
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_rotate_right",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                             {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_rotate_left",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                             {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            },
                            {
                                type: "maze_step_move_step",
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    13: {
        x: 2,
        y: 5,
        direction: Ntry.STATIC.WEST,
        code: [
            [
                MazeData.START
            ],
            [
                { type: "maze_define_function",
                    x: 270,
                    y: 30,
                    movable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    }
};

MazeData.goal = {
    1: [
        {image: "goal_1", x:6, y:2}
    ],
    2: [
        {image: "goal_1", x:0, y:5}
    ],
    3: [
        {image: "goal_1", x:6, y:1}
    ],
    4: [
        {image: "goal_1", x:3, y:4}
    ],
    5: [
        {image: "goal_1", x:3, y:4}
    ],
    6: [
        {image: "goal_1", x:3, y:5}
    ],
    7: [
        {image: "goal_1", x:4, y:2},
        {image: "goal_1", x:1, y:1},
        {image: "goal_1", x:3, y:5}
    ],
    8: [
        {image: "goal_1", x:7, y:6},
        {image: "goal_1", x:1, y:6},
        {image: "goal_1", x:1, y:0},
        {image: "goal_1", x:7, y:0}
    ],
    9: [
        {image: "goal_1", x:2, y:3}
    ],
    10: [
        {image: "goal_1", x:1, y:4}
    ],
    11: [
        {image: "goal_1", x:1, y:5}
    ],
    12: [
        {image: "goal_1", x:6, y:1}
    ],
    13: [
        {image: "goal_1", x:5, y:4}
    ]
};

MazeData.space_map = {
    
};

MazeData.help = {
};


MazeData.FRAMES = {};

MazeData.FRAMES[Ntry.STATIC.STAND] = {
    north: {key: 2, frame: [0]},
    east:  {key: 1, frame: [0]},
    south: {key: 0, frame: [0]},
    west:  {key: 1, frame: [0], flip: true},
    next: Ntry.STATIC.STAND,
    movement: 0
};
MazeData.FRAMES[Ntry.STATIC.WALK] = {
    north: {key: 2, frame: _.range(0, 15)},
    east:  {key: 1, frame: _.range(0, 16)},
    south: {key: 0, frame: _.range(0, 15)},
    west:  {key: 1, frame: _.range(0, 16), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 1,
    gridMovement: 1
};
MazeData.FRAMES[Ntry.STATIC.JUMP] = {
    north: {key: 14, frame: _.range(0, 11)},
    east:  {key: 12, frame: _.range(0, 14)},
    south: {key: 13, frame: _.range(0, 11)},
    west:  {key: 12, frame: _.range(0, 14), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 2,
    gridMovement: 2
};
MazeData.FRAMES[Ntry.STATIC.TURN_RIGHT] = {
    north: {key: 15, frame: [4, 3, 2]},
    east:  {key: 15, frame: [2, 1, 0]},
    south: {key: 15, frame: [8, 7, 6]},
    west:  {key: 15, frame: [6, 5, 4]},
    next: Ntry.STATIC.STAND,
    rotation: 1,
    movement: 0
};
MazeData.FRAMES[Ntry.STATIC.TURN_LEFT] = {
    north: {key: 15, frame: [4, 5, 6]},
    east:  {key: 15, frame: [2, 3, 4]},
    south: {key: 15, frame: [8, 0, 1]},
    west:  {key: 15, frame: [6, 7, 8]},
    next: Ntry.STATIC.STAND,
    rotation: -1,
    movement: 0
};
var simoorookFrame = new Array(8).join('0').split('').concat(_.range(0, 7));
MazeData.FRAMES[Ntry.STATIC.SIMOOROOK] = {
    north: {key: 5, frame: simoorookFrame},
    east:  {key: 4, frame: simoorookFrame},
    south: {key: 3, frame: simoorookFrame},
    west:  {key: 4, frame: simoorookFrame, flip: true},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
MazeData.FRAMES[Ntry.STATIC.WALL_CRASH] = {
    north: {key: 8, frame: _.range(0, 12)},
    east:  {key: 6, frame: _.range(0, 11)},
    south: {key: 7, frame: _.range(0, 12)},
    west:  {key: 6, frame: _.range(0, 11), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: -0.3
};
MazeData.FRAMES[Ntry.STATIC.BEE_ATTACK] = {
    north: {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    east : {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    south: {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    west : {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
MazeData.FRAMES[Ntry.STATIC.ELECTRIC_SHOCK] = {
    north: {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    east:  {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    south: {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    west:  {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
MazeData.FRAMES[Ntry.STATIC.SLIP] = {
    north: {key: 11, frame: _.range(0, 6)},
    east:  {key: 11, frame: _.range(0, 6)},
    south: {key: 11, frame: _.range(0, 6)},
    west:  {key: 11, frame: _.range(0, 6)},
    next: Ntry.STATIC.FAIL,
    movement: 0.5
};
MazeData.FRAMES[Ntry.STATIC.STOP] = {};
