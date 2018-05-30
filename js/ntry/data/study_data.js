'use strict';

var StudyData = {};

StudyData.OBJECT_ENERGY = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [{
        type: 'small',
        text: '연료',
        class: 'energy'
    }]
};

StudyData.OBJECT_WALL = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [{
        type: 'small',
        text: 'wall',
        class: 'construction'
    }]
};

StudyData.OBJECT_HUMP = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [{
        type: 'small',
        text: 'hump',
        class: 'speed'
    }]
};

StudyData.OBJECT_WALL_HUMP = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [
        {
            type: 'small',
            text: 'wall',
            class: 'construction'
        },
        {
            type: 'small',
            text: 'hump',
            class: 'speed'
        }
    ]
};

StudyData.OBJECT_STONE = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [
        {
            type: 'small',
            text: '돌',
            class: 'stone'
        }
    ]
};

StudyData.OBJECT_STONE_TEXT = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [
        {
            type: 'small',
            text: 'stone',
            class: 'stone'
        }
    ]
};

StudyData.OBJECT_AI_COMPOUND = {
    title: Lang.Menus.maze_object_title,
    popupType: 'small',
    object: [
        {
            type: 'small',
            text: 'stone',
            class: 'stone'
        },
        {
            type: 'small',
            text: 'item',
            class: 'item'
        }
    ]
};




StudyData.config = {
    1: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 4,
        "availableCode": [
            [ {type: "maze_step_move_step"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_1,
            "textContent": '안녕 나는 엔트리봇이야. 난 부품을 얻어서 내몸을 고쳐야해. move(); 명령어로 부품을 얻게 도와줘!',
            "image": 1
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": Lang.Menus.maze_text_goal_1,
            "operation": {
                title: Lang.Menus.maze_operation1_title,
                content : [{
                    description: Lang.Menus.maze_operation1_1_desc,
                    contentStyle: 'operation1_1 ' + Lang.type,
                    descStyle: 'descStyle1',
                },{
                    description: Lang.Menus.maze_operation1_2_desc,
                    contentStyle: 'operation1_2 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation1_2_textset_1,
                        x: 0,
                        y: 90
                    }, {
                        text: Lang.Menus.maze_operation1_2_textset_2,
                        x: 0,
                        y: -290
                    }]
                },{
                    description: Lang.Menus.maze_operation1_3_desc,
                    contentStyle: 'operation1_3 ' + Lang.type,
                    descStyle: 'descStyle1'
                },{
                    description: Lang.Menus.maze_operation1_4_desc,
                    contentStyle: 'operation1_4 ' + Lang.type,
                    descStyle: 'descStyle1',
                }]
            },
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [Ntry.STATIC.COMMAND_MOVE]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'small',
                object: [{
                    type: 'small',
                    text: Lang.Menus.maze_object_parts_box,
                    class: 'partsBox',
                }]
            }
        }
    },
    2: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 4,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_jump"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_2,
            "textContent": '좋아! 앞에도 부품이 있는데 이번에는 잘못 가다간 감전되기 쉬울 것 같아. jump(); 명령어를 써서 부품까지 데려다 줘.',
            "image": 2
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'jump(); 명령어로 장애물을 피해 부품 상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_JUMP_ELEC,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "object": {
                title: Lang.Menus.maze_object_title,
                popupType: 'small',
                object: [{
                    type: 'small',
                    text: Lang.Menus.maze_object_obstacle1,
                    class: 'obstacle1',
                }]
            }
        }
    },
    3: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_3,
            "textContent": '멋진걸! 저기에도 부품이 있어! 길이 조금 꼬여있지만 오른쪽, 왼쪽으로 회전할 수 있는 right(); left() 명령어를 쓰면 충분히 갈 수 있을것 같아!',
            "image": 3
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'left(); right(); 명령어로 부품상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    4: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {type: "maze_step_jump"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_4,
            "textContent": '좋아 이제 움직이는 건 많이 편해졌어! 이번에는 지금까지 배운 명령어를 같이 써서 저 부품상자까지 가보자!',
            "image": 4
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": '여러가지 명령어를 사용하여 부품상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_JUMP_ELEC,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    5: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 7,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {type: "maze_step_jump"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_5,
            "textContent": Lang.Menus.cparty_robot_intro_5,
            "image": 5
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": '여러가지 명령어를 사용하여 부품상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_JUMP_ELEC,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    6: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 9,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_5,
            "textContent": '우와 부품이 두 개나 있잖아! 두 개 다 챙겨서 가자! 그러면 몸을 빨리 고칠 수 있을 것 같아!',
            "image": 6
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": '두 부품상자에 다 갈 수 있도록 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    7: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {type: "maze_step_jump"} ]
        ],
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_6,
            "textContent": '또 부품이 두개가 있어! 이번에도 두개를 모두 챙기자!',
            "image": 7
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": '여러가지 명령어를 사용하여 부품상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_JUMP_ELEC,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    8: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 3,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [{
                type: "maze_step_for",
                params: [2]
            }]
        ],
        "essentialBlockInfo": {
            blocks: [ "maze_step_for" ]
        },
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_6,
            "textContent": '멋져! 이제 몸이 많이 좋아져서, 똑같은 일은 여러 번 해도 괜찮을 거야! for 명령어를 사용해서 가보자!',
            "image": 8
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'for 명령어를 사용하여 부품 상자까지 나를 이동시켜줘!',
            "operation": {
                title: Lang.Menus.study_maze_operation8_title,
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
                content : [
                    Ntry.STATIC.COMMAND_FOR,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    9: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 4,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {type: "maze_step_jump"} ],
            [ {
                type: "maze_step_for",
                params: [2]
            } ]
        ],
        "essentialBlockInfo": {
            blocks: [ "maze_step_for" ]
        },
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_7,
            "textContent": '어? 중간중간에 뛰어넘어야 할 곳이 있어! 그래도 for 명령어로 충분히 갈 수 있을 거야!',
            "image": 9
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'for 명령어를 사용하여 부품 상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_FOR,
                    Ntry.STATIC.COMMAND_JUMP_ELEC,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    10: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 5,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {
                type: "maze_step_for",
                params: [2]
            } ]
        ],
        "essentialBlockInfo": {
            blocks: [ "maze_step_for", ]
        },
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_8,
            "textContent": '이런! 이번에는 부품이 저기 멀리 떨어져 있어. 그래도 for 명령어를 사용하면 쉽게 갈수 있지! 얼른 도와줘!',
            "image": 10
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'for 명령어를 사용하여 부품 상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_FOR,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    11: {
        "gridSize": {
            width: 7,
            height: 6
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 7,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {
                type: "maze_step_for",
                params: [2]
            } ]
        ],
        "essentialBlockInfo": {
            blocks: [ "maze_step_for" ]
        },
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_9,
            "textContent": '우와~ 이제 내 몸이 거의 다 고쳐진 것 같아! 이번에도 for 명령어를 이용해서 부품을 구하러 가보자!',
            "image": 11
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'for 명령어를 사용하여 부품 상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_FOR,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    12: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/maze1/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "maze_step_move_step"} ],
            [ {type: "maze_step_rotate_left"} ],
            [ {type: "maze_step_rotate_right"} ],
            [ {type: "maze_step_jump"} ],
            [ {
                type: "maze_step_for",
                params: [2]
            } ]
        ],
        "essentialBlockInfo": {
            blocks: [ "maze_step_for" ]
        },
        "playerType" : 'Cparty_robot',
        "intro": {
            "content": Lang.Menus.cparty_robot_intro_10,
            "textContent": '대단해! 이제 마지막 부품만 있으면 내 몸을 완벽하게 고칠 수 있을 거야! 빨리 for 명령어로 도와줘!',
            "image": 12
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'for 명령어를 사용하여 부품 상자까지 나를 이동시켜줘!',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_FOR,
                    Ntry.STATIC.COMMAND_JUMP_ELEC,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    13: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "limitBlockCnt": 4,
        "blockMenuAlign": 'LEFT',
        "availableCode": [
            [ {type: "jr_go_straight"} ]
        ],
        "intro": {
            "content": Lang.Menus.cparty_car_intro_1,
            "textContent": '안녕! 나는 엔트리봇이라고 해, 자동차를 타고 계속 이동하려면 연료가 필요해! 앞에 있는 연료를 얻을 수 있게 도와줄래?',
            "image" :11
        },
        "popups": {
            "objective": 'move(); 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [ Ntry.STATIC.COMMAND_MOVE ]
            },
            "operation": {
                title: Lang.Menus.maze_operation1_title,
                content : [{
                    description: Lang.Menus.maze_operation1_1_desc,
                    contentStyle: 'operation1_1 ' + Lang.type,
                    descStyle: 'descStyle1',
                },{
                    description: Lang.Menus.maze_operation1_2_desc,
                    contentStyle: 'operation1_2 ' + Lang.type,
                    descStyle: 'descStyle1',
                    textSet:[{
                        text: Lang.Menus.maze_operation1_2_textset_1,
                        x: 0,
                        y: 90
                    }, {
                        text: Lang.Menus.maze_operation1_2_textset_2,
                        x: 0,
                        y: -290
                    }]
                },{
                    description: Lang.Menus.maze_operation1_3_desc,
                    contentStyle: 'operation1_3 ' + Lang.type,
                    descStyle: 'descStyle1'
                },{
                    description: Lang.Menus.maze_operation1_4_desc,
                    contentStyle: 'operation1_4 ' + Lang.type,
                    descStyle: 'descStyle1',
                }]
            },
            "object": StudyData.OBJECT_ENERGY
        }
    },
    14: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "limitBlockCnt": 9,
        "blockMenuAlign": 'LEFT',
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ]
        ],
        "intro": {
            "content": Lang.Menus.cparty_car_intro_2,
            "textContent": '좋아! 그런데 이번에는 직선길이 아니네! left();, right(); 명령어를 사용해서 연료를 얻으러 가볼까?',
            "image" : 12
        },
        "popups": {
            "objective": 'left();, right(); 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    15: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "limitBlockCnt": 4,
        "blockMenuAlign": 'LEFT',
         "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_go_slow"} ]
        ],
        "intro": {
            "content": Lang.Menus.cparty_car_intro_3,
            "textContent": '잘했어! 이번 길 앞에는 과속방지턱이 있어. 빠르게 운전하면 사고가 날 수도 있을 것 같아, move_slowly(); 명령어를 써서 연료를 얻으러 가보자!',
            "image" : 13
        },
        "popups": {
            "objective": 'move_slowly(); 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_SLOW,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "object": StudyData.OBJECT_HUMP
        }
    },
    16: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "blockMenuAlign": 'LEFT',
        "limitBlockCnt": 3,
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_repeat_until_dest"} ]
        ],
        "intro": {
            "content": Lang.Menus.cparty_car_intro_4,
            "textContent": '야호, 이제 운전이 한결 편해졌어! 이 도로에서는 while 명령어를 사용해서 연료를 채우러 가볼까?',
            "image" : 14
        },
        "essentialBlockInfo": {
            blocks: [ "jr_repeat_until_dest" ]
        },
        "popups": {
            "objective": 'while 명령어를 사용하여 연료를 얻자',
            "operation": {
                title: Lang.Menus.study_maze_operation16_title,
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
                        text: Lang.Menus.maze_operation9_3_textset_3,
                        x: 365,
                        y: -160
                    }]
                }],
            },
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    17: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "blockMenuAlign": 'LEFT',
        "limitBlockCnt": 7,
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ],
            [ {type: "jr_repeat_until_dest"} ]
        ],
        "essentialBlockInfo": {
            blocks: [ "jr_repeat_until_dest" ]
        },
        "intro": {
            "content": Lang.Menus.cparty_car_intro_5,
            "textContent": '와 이번 도로는 조금 복잡해 보이네 while 명령어에 반복되는 move();, left();, right(); 명령어를 넣어서 연료까지 가보자.',
            "image" : 15
        },
        "popups": {
            "objective": 'while 명령어에 move();, left();, right(); 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            }
        }
    },
    18: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "blockMenuAlign": 'LEFT',
        "limitBlockCnt": 5,
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ],
            [ {type: "jr_repeat_until_dest"} ],
            [ {type: "jr_if_construction"} ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "jr_repeat_until_dest",
                "jr_if_construction"
            ]
        },
        "intro": {
            "content": Lang.Menus.cparty_car_intro_6,
            "textContent": '이번에는 도로에 장애물이 있어서 잘 돌아가야 될 것 같아, if 명령어를 써서 만약에 장애물이 앞에 있다면 어떻게 해야 하는지 알려줘!',
            "image" : 16
        },
        "popups": {
            "objective": 'while과 if 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_IF,
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "operation": {
                title: Lang.Menus.study_maze_operation18_title,
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
            "object": StudyData.OBJECT_WALL
        }
    },
    19: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "limitBlockCnt": 5,
        "blockMenuAlign": 'LEFT',
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ],
            [ {type: "jr_repeat_until_dest"} ],
            [ {type: "jr_if_construction"} ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "jr_repeat_until_dest",
                "jr_if_construction"
            ]
        },
        "intro": {
            "content": Lang.Menus.cparty_car_intro_7,
            "textContent": '좋아 잘했어! 한번 더 if 명령어를 사용해서 장애물을 피해 연료를 얻으러 가보자!',
            "image" : 17
        },
        "popups": {
            "objective": 'while과 if 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_IF,
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "object": StudyData.OBJECT_WALL
        }
    },
    20: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "limitBlockCnt": 5,
        "blockMenuAlign": 'LEFT',
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ],
            [ {type: "jr_go_slow"} ],
            [ {type: "jr_repeat_until_dest"} ],
            [ {type: "jr_if_speed"} ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "jr_repeat_until_dest",
                "jr_if_speed"
            ]
        },
        "intro": {
            "content": Lang.Menus.cparty_car_intro_8,
            "textContent": '앗 아까 만났던 과속 방지턱이 두 개나 있네, 천천히 가기 블록을 이용해서 안전하게 연료를 채우러 가보자!',
            "image" : 18
        },
        "popups": {
            "objective": 'while과 if 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_IF,
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_SLOW,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "object": StudyData.OBJECT_HUMP
        }
    },
    21: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "blockMenuAlign": 'LEFT',
        "limitBlockCnt": 7,
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ],
            [ {type: "jr_go_slow"} ],
            [ {type: "jr_repeat_until_dest"} ],
            [ {type: "jr_if_construction"} ],
            [ {type: "jr_if_speed"} ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "jr_repeat_until_dest",
                "jr_if_construction",
                "jr_if_speed"
            ]
        },
        "intro": {
            "content": Lang.Menus.cparty_car_intro_9,
            "textContent": '복잡해 보이는 길이지만, 앞에서 사용한 while 명령어와 if 명령어를 잘 이용하면 충분히 운전할 수 있어, 연료를 채울 수 있도록 도와줘!',
            "image" : 19
        },
        "popups": {
            "objective": 'while과 if 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_IF,
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_SLOW,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "object": StudyData.OBJECT_WALL_HUMP
        }
    },
    22: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "playerType": "CpartyCar",
        "bitmapPath": "/img/assets/ntry/bitmap/maze_car/",
        "blockMenuAlign": 'LEFT',
        "limitBlockCnt": 8,
        "availableCode": [
            [ {type: "jr_go_straight"} ],
            [ {type: "jr_turn_left"} ],
            [ {type: "jr_turn_right"} ],
            [ {type: "jr_go_slow"} ],
            [ {type: "jr_repeat_until_dest"} ],
            [ {type: "jr_if_construction"} ],
            [ {type: "jr_if_speed"} ]
        ],
        "essentialBlockInfo": {
            blocks: [
                "jr_repeat_until_dest",
                "jr_if_construction",
                "jr_if_speed"
            ]
        },
        "intro": {
            "content": Lang.Menus.cparty_car_intro_10,
            "textContent": '정말 멋져! 명령어를 잘 나열해서 마지막 남은 연료까지 가보자!',
            "image" : 20
        },
        "popups": {
            "objective": 'while과 if 명령어를 사용하여 연료를 얻자',
            "command": {
                title: Lang.Menus.maze_command_title,
                content : [
                    Ntry.STATIC.COMMAND_IF,
                    Ntry.STATIC.COMMAND_WHILE,
                    Ntry.STATIC.COMMAND_SLOW,
                    Ntry.STATIC.COMMAND_RIGHT,
                    Ntry.STATIC.COMMAND_LEFT,
                    Ntry.STATIC.COMMAND_MOVE
                ]
            },
            "object": StudyData.OBJECT_WALL_HUMP
        }
    },
    23: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ]
        ],
        "hints": [
            {
                "title": "게임의 목표",
                "content": "돌을 피해 오른쪽 행성까지 안전하게 이동할 수 있도록 도와주세요.",
                "detail": "돌을 피해 오른쪽 행성까지 안전하게 이동할 수 있도록 도와주세요.",
                "image": "21-map"
            },
            {
                "title": "시작 방법",
                "content": "어떻게 시작할 수 있나요?",
                "detail": "1. 블록 꾸러미에서 원하는 블록을 꺼내어 “시작하기를 클릭했을 때” 블록과 연결해봐<br>2. 다 조립했으면, 시작을 눌러봐<br>3. 나는 네가 조립한 블록대로 위에서부터 순서대로 움직일게",
                "image": 21
            },
            {
                "title": "움직이게 하기",
                "content": "엔트리봇은 어떻게 움직이나요?",
                "detail": "나는 위쪽으로 가거나 앞으로 가거나 아래쪽으로 갈 수 있어.<br>방향을 정할 때에는 돌이 없는 방향으로 안전하게 갈 수 있도록 해줘.<br>나를 화면 밖으로 내보내면 우주미아가 되어버리니 조심해!",
                "image": 22
            }
        ],
        "intro": {
            "content": "안녕? 나는 엔트리봇이라고 해. 우주 탐사를 마치고 지구로 돌아가려는데 우주를 떠다니는 돌들 때문에 쉽지 않네. 내가 안전하게 집에 갈 수 있도록 도와줄래? 나의 우주선에는 나의 앞과 위, 아래에 무엇이 어느 정도의 거리에 있는지 알려주는 레이더가 있어 너의 판단을 도와줄 거야!",
            "textContent": '안녕? 나는 엔트리봇이야. 우주 탐사를 마치고 지구로 돌아가려는데 우주를 떠다니는 돌 때문에 이동하기가 어려워. 내가 안전하게 집에 갈 수 있도록 도와줄래?<br />move(); up(); down(); 명령어를 사용해서 나를 오른쪽 행성까지 이동시켜줘!',
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'move(); up(); down(); 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "command": Ntry.STATIC.COMMAND_AI_TYPE_1,
            "object": StudyData.OBJECT_STONE,
            "operation": {
                title: Lang.Menus.maze_operation1_title,
                content : [{
                    description: "나는 로봇강아지 엔트리봇이야. 나에게 명령을 내려서 미션을 해결할 수 있게 도와줘! 미션은 시작할 때마다 <span class='textShadow'>'목표'</span>를 통해서 확인할 수 있어!",
                    contentStyle: 'ai_operation1_1 ' + Lang.type,
                    descStyle: 'descStyle4',
                },{
                    description: "미션을 확인했다면 명령을 내려야 해 <span class='textUnderline'>‘명령어 꾸러미’</span>는 <b>명령어</b>가 있는 공간이야. <b>마우스</b>와 <b>키보드</b>로 <b>명령</b>을 내릴 수 있어. <span class='textShadow'>마우스로</span>는 여기에 있는 <b>명령어</b>를 클릭하거나, <b>명령어</b>를 <span class='textUnderline'>‘명령어 조립소’</span>로 끌고와서 나에게 <b>명령</b>을 내릴 수 있어!",
                    contentStyle: 'ai_operation1_2 ' + Lang.type,
                    descStyle: 'descStyle4',
                    textSet:[{
                        text: Lang.Menus.maze_operation1_2_textset_1,
                        x: 0,
                        y: 90
                    }, {
                        text: Lang.Menus.maze_operation1_2_textset_2,
                        x: 0,
                        y: -280
                    }]
                },{
                    description: '<span class="textShadow">키보드</span>로 명령을 내리려면 ‘명령어 꾸러미＇에 있는 <b>명령어를 키보드로 직접 입력하면 돼.</b> 명령어를 입력할 때 명령어 끝에 있는 <span class="textShadow">()와 ;</span> 를 빼먹지 않도록 주의해야해!',
                    contentStyle: 'ai_operation1_3 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                    description: '미션을 해결하기 위한 명령어를 다 입력했다면 <span class="textShadow">[시작하기]</span>를 누르면 돼. [시작하기]를 누르면 나는 명령을 내린대로 움직일 거야! 각 명령어가 궁금하다면 <span class="textShadow">[명령어 도움말]</span>을 확인해봐!',
                    contentStyle: 'ai_operation1_4 ' + Lang.type,
                    descStyle: 'descStyle4',
                }]
            }
        }
    },
    24: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 8,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ]
        ],
        "hints": [
            {
                "title": "게임의 목표",
                "content": "돌을 피해 오른쪽 행성까지 안전하게 이동할 수 있도록 도와주세요.",
                "detail": "돌을 피해 오른쪽 행성까지 안전하게 이동할 수 있도록 도와주세요.",
                "image": "22-map"
            },
            {
                "title": "움직이게 하기",
                "content": "엔트리봇은 어떻게 움직이나요?",
                "detail": "나는 위쪽으로 가거나 앞으로 가거나 아래쪽으로 갈 수 있어.<br>방향을 정할 때에는 돌이 없는 방향으로 안전하게 갈 수 있도록 해줘.<br>나를 화면 밖으로 내보내면 우주미아가 되어버리니 조심해!",
                "image": 22
            },
            {
                "title": "시작 방법",
                "content": "어떻게 시작할 수 있나요?",
                "detail": "1. 블록 꾸러미에서 원하는 블록을 꺼내어 “시작하기를 클릭했을 때” 블록과 연결해봐<br>2. 다 조립했으면, 시작을 눌러봐<br>3. 나는 네가 조립한 블록대로 위에서부터 순서대로 움직일게",
                "image": 21
            }
        ],
        "intro": {
            "content": "고마워! 덕분에 돌을 쉽게 피할 수 있었어. 그런데 이번엔 더 많은 돌이 있잖아? 블록들을 조립하여 돌들을 이리저리 잘 피해 보자!",
            "textContent": '고마워! 덕분에 돌을 쉽게 피할 수 있었어. 그런데 이번엔 더 많은 돌이 있잖아? move(); up(); down(); 명령어로 돌을 이리저리 잘 피해 보자!'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'move(); up(); down(); 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_STONE,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_1,
        }
    },
    25: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_repeat_until_reach"} ]
        ],
        "essentialBlockInfo": {
            blocks : [ 'ai_repeat_until_reach' ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "반복하기 블록으로 돌들을 피할 수 있도록 도와주세요.",
                "detail": "반복하기 블록으로 돌들을 피할 수 있도록 도와주세요.",
                "image": "23-map"
            },
            {
                "title": "반복 블록",
                "content": "반복 블록은 무슨 블록인가요?",
                "detail": "휴~ 이번에 가야 할 길은 너무 멀어서 하나씩 조립하기는 힘들겠는걸? 반복하기블록을 사용해봐.<br>똑같이 반복되는 블록들을 반복하기 블록으로 묶어주면 아주 긴 블록을 짧게 줄여줄 수 있어!",
                "image": 23
            },
            {
                "title": "움직이게 하기",
                "content": "엔트리봇은 어떻게 움직이나요?",
                "detail": "나는 위쪽으로 가거나 앞으로 가거나 아래쪽으로 갈 수 있어.<br>방향을 정할 때에는 돌이 없는 방향으로 안전하게 갈 수 있도록 해줘.<br>나를 화면 밖으로 내보내면 우주미아가 되어버리니 조심해!",
                "image": 22
            },
            {
                "title": "시작 방법",
                "content": "어떻게 시작할 수 있나요?",
                "detail": "1. 블록 꾸러미에서 원하는 블록을 꺼내어 “시작하기를 클릭했을 때” 블록과 연결해봐<br>2. 다 조립했으면, 시작을 눌러봐<br>3. 나는 네가 조립한 블록대로 위에서부터 순서대로 움직일게",
                "image": 21
            }
        ],
        "intro": {
            "content": "좋았어! 안전하게 돌을 피했어. 그런데 앞을 봐! 아까보다 더 많은 돌이 있어. 하지만 걱정하지 마. 나에게 반복하기 블록이 있거든. 반복하기 블록 안에 움직이는 블록을 넣으면 목적지에 도착할 때까지 계속 움직일게!",
            "textContent": '좋았어! 안전하게 돌을 피했어. 그런데 앞을 봐! 아까보다 더 많은 돌이 있어. while 명령어에 반복되는 명령을 넣으면 목적지에 도착할때 까지 계속 움직일 수 있어!'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'while 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_STONE,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_2,
            "operation": {
                title: Lang.Menus.study_maze_operation3_title,
                content : [{
                    description: "<b>똑같은 일</b>을 반복해서 명령하는건 매우 귀찮은 일이야. 이럴땐 <span class='textShadow'>반복</span>과 관련된 명령어를 사용하면 훨씬 쉽게 명령을 내릴 수 있어.",
                    contentStyle: 'ai_operation3_1 ' + Lang.type,
                    descStyle: 'descStyle4',
                    textSet:[{
                        text: '똑같은 명령어를 반복해서 사용하는 경우',
                        x: -310,
                        y: 295
                    }, {
                        text: '반복 명령어를 사용하는 경우',
                        x: 323,
                        y: 295
                    }]
                },{
                    description: "그렇다면 반복되는 명령을 쉽게 내리는 방법을 알아보자. While 명령어를 사용하면 미션이 끝날 때까지 <b>동일한 행동</b>을 계속 반복할 수 있어! 이 명령어는 <span class='textShadow'>괄호({ })</span> 사이에 반복할 명령어를 넣어 주기만 하면 돼!",
                    contentStyle: 'ai_operation3_2 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                    description: '예를 들어 명령어  <span class="numberOne"></span> 은 미션을 완료할때까지 반복해서 up(); down()을 실행해. <span class="numberTwo"></span> 명령어와 동일한 명령어지.',
                    contentStyle: 'ai_operation3_3 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                    description: '이 명령어를 사용할 때는 <span class="textShadow">{ } 안에 반복할 명령어</span>를 잘 입력했는지, <span class="textShadow">`true`</span>가 빠지지 않았는지 잘 살펴봐! 이 명령어에 대한 자세한 설명은 [명령어 도움말]에서 볼 수 있어.',
                    contentStyle: 'ai_operation3_4 ' + Lang.type,
                    descStyle: 'descStyle4',
                    textSet:[{
                        text: Lang.Menus.maze_operation9_3_textset_1,
                        x: -345,
                        y: -160
                    }, {
                        text: Lang.Menus.maze_operation9_3_textset_3,
                        x: 365,
                        y: -160
                    }]
                }]
            }
        }
    },
    26: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        null, null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ]
        ],
        "essentialBlockInfo": {
            matchCnt : 1,
            blocks : [
                "ai_if_else_1",
                "ai_repeat_until_reach"
            ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "만약 블록으로 돌을 피할 수 있도록 도와주세요.",
                "detail": "만약 블록으로 돌을 피할 수 있도록 도와주세요.",
                "image": "24-map"
            },
            {
                "title": "만약 블록(1)",
                "content": "만약 ~라면 블록은 어떻게 동작하나요?",
                "detail": "만약 앞에 ~가 있다면 / 아니면 블록을 사용하면 내 바로 앞에 돌이 있는지 없는지 확인해서 다르게 움직일 수 있어~<br>만약 내 바로 앞에 돌이 있다면 '만약' 아래에 있는 블록들을 실행하고 돌이 없으면 '아니면' 안에 있는 블록들을 실행할 거야.<br>내 바로 앞에 돌이 있을 때와 없을 때, 어떻게 움직일지 잘 결정해줘~",
                "image": 24
            },
            {
                "title": "반복 블록",
                "content": "반복 블록은 어떻게 사용하나요?",
                "detail": "휴~ 이번에 가야 할 길은 너무 멀어서 하나씩 조립하기는 힘들겠는걸?<br>반복하기블록을 사용해봐.<br>똑같이 반복되는 블록들을 반복하기 블록으로 묶어주면 아주 긴 블록을 짧게 줄여줄 수 있어!",
                "image": 23
            }
        ],
        "intro": {
            "content": "대단해! 반복하기 블록을 쓰니 많은 돌을 피하기가 훨씬 수월한걸! 하지만 이렇게 일일이 조종하기는 피곤하다. 나에겐 레이더가 있으니 앞으로 무엇이 나올지 알 수 있어. 앞으로 계속 가다가 앞에 돌이 있으면 피할 수 있도록 해줄래?",
            "textContent": '대단해! while 명령어를 쓰니 많은 돌을 피하기가 훨씬 수월한걸! 나는 물체와 거리를 알수있는 레이더가 있는데, 이 레이더와 if~else 명령어를 사용해서 계속 가다가 앞에 돌이 있으면 피할 수 있도록 해줄래?'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'radar와 if~else 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_STONE_TEXT,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_3,
            "operation": {
                title: Lang.Menus.study_ai_operation4_title,
                content : [{
                    description: "앞에서는 미션이 끝날 때까지 계속 반복하는 반복 명령어에 대해 배웠어. 이번에는 <span class='textShadow'>특정한 조건에서만 행동을 하는 조건 명령어</span>를 살펴보자. <span class='numberTwo'></span> 에서 보는것처럼 조건 명령어를 사용하면 <b>명령을 보다 효율적으로 잘 내릴 수 있어.</b>",
                    contentStyle: 'ai_operation4_1 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                    description: "조건 명령어는 if와 if~else 명령어가 있는데 여기서는 if~else를 알아볼거야. If~else는 크게 `조건` 과  `조건이 발생 했을때 실행되는 명령` `조건이 발생하지 않았을때 실행되는 명령`으로 나눌수 있어. 먼저 조건 부분을 살펴보자. If 다음에 나오는 ( ) 부분이 조건을 입력하는 부분이야. <span class='numberOne'></span> 과 같은 명령어를 예로 살펴보자. if(radar_right > 1)은 만약 앞의 레이더값(radar_right)이 1보다 클 경우를 뜻해. ",
                    contentStyle: 'ai_operation4_2 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                    description: '이제 `조건이 발생했을 때, 발생하지 않았을 때 실행되는 명령`을 살펴보자. 조건이 발생했을때는 if 아래에 있는 괄호안의 명령을 실행하게 돼! 조건이 발생하지 않으면 윗 부분의 명령은 무시하고 else 아래에 묶인 괄호안의 명령을 실행하게 돼! <span class="numberOne"></span>의 명령어를 예로 살펴보자. 조건은 만약에 `앞의레이더의 값이 1보다 큰 경우` 이고, 이 조건이 발생했을 때 나는 if 아래에 있는 명령어 move(); 을 실행해서 앞으로 가게 되고 조건이 발생하지 않았을 때, 즉 앞의 레이더값이 1보다 같거나 작은경우는 else 아래에 있는 명령어인 down(); 를 실행해서 아래로 내려가게 돼',
                    contentStyle: 'ai_operation4_3 ' + Lang.type,
                    descStyle: 'descStyle5'
                },{
                    description: '거리 레이더에 대해서도 잠시 알아보자! 거리 레이더는 ‘현재 엔트리봇을 기준으로 물체와 엔트리봇의 거리’를 나타내고 있어. radar_up, radar_right, radar_down 와 같이 엔트리봇은 위, 앞, 아래 거리 레이더를 가지고 있어. radar_up 값이 1이면 위에 돌이 있다는 것을 뜻하지. radar_right 값이 1이면 바로 앞에 돌이 있다는 것을 뜻해! 앞으로 이런 레이더 값을 이용해서 나를 많이 도와줘야 할거야! 꼭 기억해줘!',
                    contentStyle: 'ai_operation4_4 ' + Lang.type,
                    descStyle: 'descStyle4',
                },{
                    description: '조건 명령어는 반복하기 명령어와 함께 쓰이는 경우가 많아. 조건명령어는 1번만 실행되기 때문에, 반복하기로 계속 조건을 확인하게 해 주면 효율적인 명령을 내릴 수 있어. <span class="numberOne"></span> <span class="numberTwo"></span> <span class="numberThree"></span> 순서와 같이 명령을 내려봐!',
                    contentStyle: 'ai_operation4_5 ' + Lang.type,
                    descStyle: 'descStyle4',
                }]
            }
        }
    },
    27: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 6,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        null, null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ]
        ],
        "essentialBlockInfo": {
            matchCnt : 1,
            blocks : [
                "ai_repeat_until_reach",
                "ai_if_else_2"
            ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "레이더의 사용 방법을 익히고 돌을 피해보세요.",
                "detail": "레이더의 사용 방법을 익히고 돌을 피해보세요.",
                "image": "25-map"
            },
            {
                "title": "레이더(1)",
                "content": "레이더란 무엇인가요? 어떻게 활용할 수 있나요?",
                "detail": "레이더는 지금 내가 물체와 얼마나 떨어져 있는지 알려주는 기계야.<br>만약 바로 내 앞에 무엇인가 있다면 앞쪽 레이더는 '1'을 보여줘.<br>또, 레이더는 혼자 있을 때 보다 만약 &lt;사실&gt;이라면 / 아니면 블록과<br> 같이 쓰이면 아주 강력하게 쓸 수 있어.<br>예를 들어 내 앞에 물체와의 거리가 1보다 크다면 나는 안전하게 앞으로 갈 수 있겠지만, 아니라면 위나 아래쪽으로 피하도록 할 수 있지.",
                "image": 26
            },
            {
                "title": "만약 블록(2)",
                "content": "만약 <사실>이라면 블록은 어떻게 사용하나요?",
                "detail": "만약 &lt;사실&gt;이라면 / 아니면 블록은 &lt;사실&gt; 안에 있는 내용이 맞으면 '만약' 아래에 있는 블록을 실행하고, 아니면 '아니면' 아래에 있는 블록을 실행해.<br>어떤 상황에서 다르게 움직이고 싶은 지를 잘 생각해서 &lt;사실&gt; 안에 적절한 판단 조건을 만들어 넣어봐.<br>판단 조건을 만족해서 '만약' 아래에 있는 블록을 실행하고 나면 '아니면' 아래에 있는 블록들은 실행되지 않는다는 걸 기억해!",
                "image": 25
            },
            {
                "title": "반복 블록",
                "content": "반복 블록은 무슨 블록인가요?",
                "detail": "휴~ 이번에 가야 할 길은 너무 멀어서 하나씩 조립하기는 힘들겠는걸?<br>반복하기블록을 사용해봐.<br>똑같이 반복되는 블록들을 반복하기 블록으로 묶어주면 아주 긴 블록을 짧게 줄여줄 수 있어!",
                "image": 23
            }
        ],
        "intro": {
            "content": "잘했어! 여기까지 와서 아주 기뻐. 이번에는 레이더가 앞에 있는 물체까지의 거리를 말해줄 거야. 이 기능을 사용하여 돌을 피해 보자! 돌까지의 거리가 멀 때는 앞으로 계속 가다가, 거리가 가까워지면 피할 수 있도록 해줄래?",
            "textContent": '잘했어! 여기까지 와서 아주 기뻐. 방금 한것처럼 돌을 피해 보자! 돌까지의 거리가 멀 때는 앞으로 계속 가다가, 거리가 가까워지면 피할 수 있도록 해줄래?'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'radar와 if~else 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_STONE_TEXT,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_3
        }
    },
    28: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 9,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'UP', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'RIGHT', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'DOWN', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ]
        ],
        "essentialBlockInfo": {
            matchCnt : 1,
            blocks : [
                "ai_repeat_until_reach",
                "ai_if_else_2"
            ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "레이더를 활용해 돌을 쉽게 피할 수 있도록 도와주세요.",
                "detail": "레이더를 활용해 돌을 쉽게 피할 수 있도록 도와주세요.",
                "image": "26-map"
            },
            {
                "title": "만약 블록(3)",
                "content": "만약 블록이 겹쳐져 있으면 어떻게 동작하나요?",
                "detail": "만약 ~ / 아니면 블록안에도 만약 ~ / 아니면 블록을 넣을 수 있어! 이렇게 되면 다양한 상황에서 내가 어떻게 행동해야 할지 정할 수 있어.<br>예를 들어 앞에 돌이 길을 막고 있을때와 없을때의 행동을 정한다음, 돌이 있을때의 상황에서도 상황에 따라 위쪽으로 갈지 아래쪽으로 갈지 선택 할 수 있어",
                "image": 27
            },
            {
                "title": "레이더(1)",
                "content": "레이더란 무엇인가요? 어떻게 활용할 수 있나요?",
                "detail": "레이더는 지금 내가 물체와 얼마나 떨어져 있는지 알려주는 기계야.<br>만약 바로 내 앞에 무엇인가 있다면 앞쪽 레이더는 '1'을 보여줘.<br>또, 레이더는 혼자 있을 때 보다 만약 &lt;사실&gt;이라면 / 아니면 블록과 같이 쓰이면 아주 강력하게 쓸 수 있어.<br>예를 들어 내 앞에 물체와의 거리가 1보다 크다면 나는 안전하게 앞으로 갈 수 있겠지만, 아니라면 위나 아래쪽으로 피하도록 할 수 있지.",
                "image": 26
            },
            {
                "title": "만약 블록(2)",
                "content": "만약 <사실>이라면 블록은 어떻게 사용하나요?",
                "detail": "만약 &lt;사실&gt;이라면 / 아니면 블록은 &lt;사실&gt; 안에 있는 내용이 맞으면 '만약' 아래에 있는 블록을 실행하고, 아니면 '아니면' 아래에 있는 블록을 실행해.<br>어떤 상황에서 다르게 움직이고 싶은 지를 잘 생각해서 &lt;사실&gt; 안에 적절한 판단 조건을 만들어 넣어봐.<br>판단 조건을 만족해서 '만약' 아래에 있는 블록을 실행하고 나면 '아니면' 아래에 있는 블록들은 실행되지 않는다는 걸 기억해!",
                "image": 25
            }
        ],
        "intro": {
            "content": "와~ 멋진걸? 레이더를 활용하여 돌을 잘 피해 나가고 있어! 이번에는 여러 개의 레이더를 사용하여 이리저리 돌들을 피해 나갈 수 있게 만들어줄래?",
            "textContent": '와~ 멋진걸? 레이더를 활용하여 돌을 잘 피해 나가고 있어! 이번에는 여러 개의 레이더를 사용하여 이리저리 돌을 피해 나갈 수 있게 만들어줄래?'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'radar와 if~else 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_STONE_TEXT,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_3,
            "operation": {
                title: Lang.Menus.study_ai_operation6_title,
                content : [{
                    description: "앞에서 if~else 명령을 배웠어. 이 명령어는 다양하게 활용 가능한데, else안에 if~else명령어를 또 넣을 수도 있어. 이렇게 되면 다양한 상황에서 내가 어떻게 행동해야 할지 정할 수 있지.",
                    contentStyle: 'ai_operation6_1 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                    description: "<span class='numberOne'></span> 의 명령어를 보면 앞 레이더값이 1보다 크면(바로 앞에 돌이 없으면) 앞으로 가는데, 그렇지 않은 경우에는(만약에 앞 레이더값이 1보다 작거나 같으면) 또다시 2가지로 상황을 나눠서 아래의 레이더가 1보다 크면(바로 아래에 돌이 없으면) 아래로 가고 그렇지 않은 경우(바로 아래에 돌이 있으면)에는 위로 올라가게 되지 이렇게<br> if~else 명령어를 여러 개 사용하여 다양한 조건에서도 내가 동작하도록 해 봐!",
                    contentStyle: 'ai_operation6_2 ' + Lang.type,
                    descStyle: 'descStyle4'
                }]
            }
        }
    },
    29: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 10,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'UP', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'RIGHT', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'DOWN', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_distance_value",
                    params: ['UP']
                }
            ],
            [
                {
                    type: "ai_distance_value",
                    params: ['RIGHT']
                }
            ],
            [
                {
                    type: "ai_distance_value",
                    params: ['DOWN']
                }
            ]
        ],
        "essentialBlockInfo": {
            matchCnt : 1,
            blocks : [
                "ai_repeat_until_reach",
                "ai_if_else_2"
            ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "레이더를 활용해 돌을 쉽게 피할 수 있도록 도와주세요.",
                "detail": "레이더를 활용해 돌을 쉽게 피할 수 있도록 도와주세요.",
                "image": "27-map"
            },
            {
                "title": "레이더(2)",
                "content": "위쪽 레이더와 아래쪽 레이더의 값을 비교하고 싶을 땐 어떻게 하나요?",
                "detail": "([위쪽]레이더) 블록은 위쪽 물체까지의 거리를 뜻하는 블록이야.<br>아래쪽과 위쪽 중에서 어느 쪽에 돌이 더 멀리 있는지 확인하기 위해서 쓸 수 있는 블록이지.<br>돌을 피해가는 길을 선택할 때에는 돌이 멀리 떨어져 있는 쪽으로 피하는게 앞으로 멀리 가는데 유리할거야~",
                "image": 28
            },
            {
                "title": "만약 블록(3)",
                "content": "만약 블록이 겹쳐져 있으면 어떻게 동작하나요?",
                "detail": "만약 ~ / 아니면 블록안에도 만약 ~ / 아니면 블록을 넣을 수 있어! 이렇게 되면 다양한 상황에서 내가 어떻게 행동해야 할지 정할 수 있어.<br>예를 들어 앞에 돌이 길을 막고 있을때와 없을때의 행동을 정한다음, 돌이 있을때의 상황에서도 상황에 따라 위쪽으로 갈지 아래쪽으로 갈지 선택 할 수 있어",
                "image": 27
            },
            {
                "title": "레이더(1)",
                "content": "레이더란 무엇인가요? 어떻게 활용할 수 있나요?",
                "detail": "레이더는 지금 내가 물체와 얼마나 떨어져 있는지 알려주는 기계야.<br>만약 바로 내 앞에 무엇인가 있다면 앞쪽 레이더는 '1'을 보여줘.<br>또, 레이더는 혼자 있을 때 보다 만약 &lt;사실&gt;이라면 / 아니면 블록과<br> 같이 쓰이면 아주 강력하게 쓸 수 있어.<br>예를 들어 내 앞에 물체와의 거리가 1보다 크다면 나는 안전하게 앞으로 갈 수 있겠지만, 아니라면 위나 아래쪽으로 피하도록 할 수 있지.",
                "image": 26
            },
            {
                "title": "만약 블록(2)",
                "content": "새로운 만약 블록은 어떻게 사용하나요?",
                "detail": "만약 &lt;사실&gt;이라면 / 아니면 블록은 &lt;사실&gt; 안에 있는 내용이 맞으면 '만약' 아래에 있는 블록을 실행하고, 아니면 '아니면' 아래에 있는 블록을 실행해.<br>어떤 상황에서 다르게 움직이고 싶은 지를 잘 생각해서 &lt;사실&gt; 안에 적절한 판단 조건을 만들어 넣어봐.<br>판단 조건을 만족해서 '만약' 아래에 있는 블록을 실행하고 나면 '아니면' 아래에 있는 블록들은 실행되지 않는다는 걸 기억해!",
                "image": 25
            }
        ],
        "intro": {
            "content": "휴~ 지구에 점점 가까워지고 있어! 돌을 피할 때 기왕이면 더 안전한 길로 가고 싶어! 아마도 돌이 더 멀리 있는 쪽이 더 안전한 길이겠지? 위쪽 레이더와 아래쪽 레이더를 비교하여 더 안전한 쪽으로 움직이도록 해줄래?",
            "textContent": '휴~ 지구에 점점 가까워지고 있어! 돌을 피할 때 기왕이면 더 안전한 길로 가고 싶어! 아마도 돌이 더 멀리 있는 쪽이 더 안전한 길이겠지? 위쪽 레이더와 아래쪽 레이더를 비교하여 더 안전한 쪽으로 움직이도록 해줄래?'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'radar_up 과 radar_down 값을 비교하는 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_STONE_TEXT,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_3,
            "operation": {
                title: Lang.Menus.study_ai_operation7_title,
                content : [{
                    description: "지금까지 <span class='numberOne'></span> 과 같이 주로 레이더의 값이 특정 숫자값보다 큰지 알아보는 조건을 만들어 보았어. 하지만 레이더끼리 값을 비교하는 조건을 만들 수도 있어! <span class='numberTwo'></span> 처럼 명령어를 입력하면 앞 레이더가 아래 레이더 보다 더 큰 경우에 if 아래의 명령어가 실행되고, 아닌 경우에는 else 아래의 명령어가 실행돼! <br>이제 레이더 값을 비교하는 조건을 만들어 문제를 해결해보자!",
                    contentStyle: 'ai_operation7_1 ' + Lang.type,
                    descStyle: 'descStyle4'
                }]
            }
        }
    },
    30: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 12,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['UP', 'ITEM']
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['RIGHT', 'ITEM']
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['DOWN', 'ITEM']
                }
            ],
        ],
        "essentialBlockInfo": {
            matchCnt : 1,
            blocks : [
                "ai_repeat_until_reach",
                "ai_if_else"
            ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "아이템을 향해 이동하여 돌을 피해보세요.",
                "detail": "아이템을 향해 이동하여 돌을 피해보세요.",
                "image": "28-map"
            },
            {
                "title": "물체 이름 확인",
                "content": "앞으로 만날 물체의 이름을 확인해서 무엇을 할 수 있나요?",
                "detail": "아이템을 얻기위해서는 아이템이 어디에 있는지 확인할 필요가 있어. <br>그럴 때 사용할 수 있는 블록이 [위쪽] 물체는 [아이템]인가? 블록이야.<br>이 블록을 활용하면 아이템이 어느 위치에 있는지 알 수 있고 아이템이 있는 방향으로 움직이도록 블록을 조립할 수 있어.",
                "image": 29
            },
            {
                "title": "만약 블록(3)",
                "content": "만약 블록이 겹쳐져 있을 수도 있나요?",
                "detail": "만약 ~ / 아니면 블록안에도 만약 ~ / 아니면 블록을 넣을 수 있어! 이렇게 되면 다양한 상황에서 내가 어떻게 행동해야 할지 정할 수 있어.<br>예를 들어 앞에 돌이 길을 막고 있을때와 없을때의 행동을 정한다음 돌이 있을때의 상황에서도 상황에 따라 위쪽으로 갈지 아래쪽으로 갈지 선택 할 수 있어",
                "image": 27
            }
        ],
        "intro": {
            "content": "좋아! 덕분에 무사히 비행하고 있어. 어? 그런데 저게 뭐지? 저건 내가 아주 위급한 상황에서 사용할 수 있는 특별한 에너지야! 이번에는 저 아이템들을 모두 모으며 움직이자!",
            "textContent": '좋아! 덕분에 무사히 비행하고 있어. 어? 그런데 저게 뭐지? 저건 내가 아주 위급한 상황에서 사용할 수 있는 특별한 에너지야! 이번에는 저 아이템들을 획득하며 움직여보자!'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'object 레이더를 사용하여 아이템을 먹으면서 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_AI_COMPOUND,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_3,
            "operation": {
                title: Lang.Menus.study_ai_operation8_title,
                content : [{
                    description: "앞서 거리 레이더에 대해서 배웠어. 이번에는 물체 레이더 object에 대해 알아보자. 물체 레이더는 현재 엔트리봇을 기준으로 가장 가까이 있는 위, 앞, 아래에 있는 물체를 나타내고 있어. 이 레이더는 감지한 물체가 ‘돌일때는 STONE , 아이템일때는 ITEM, 벽일때는 WALL로’ 레이더값을 나타내고 있지",
                    contentStyle: 'ai_operation8_1 ' + Lang.type,
                    descStyle: 'descStyle4'
                },{
                description: "물체 레이더를 사용하는 방법을 알아보자. <span class='numberOne'></span> 과 같이 (레이더의 위치 == ‘물체‘) 를 적으면 돼. <br><span class='numberOne'></span> 은 만약 앞의 물체레이더에 돌이 있으면 아래로 가고, 아니면 앞으로 가는 명령어야. 레이더의 위치는 다음과 같이 3개가 있고 (object_up, object_right, object_down) 감지할 수 있는 물체도 다음과 같이 3개가 있어 (stone, item, wall) <br>이제 물체레이더를 이용해서 문제를 해결해보자!",
                    contentStyle: 'ai_operation8_2 ' + Lang.type,
                    descStyle: 'descStyle5'
                }]
            }
        }
    },
    31: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 16,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_use_item"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['UP', 'ITEM']
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['RIGHT', 'ITEM']
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['DOWN', 'ITEM']
                }
            ],
        ],
        "maxItem": 3,
        "essentialBlockInfo": {
            matchCnt : 1,
            blocks : [
                "ai_repeat_until_reach",
                "ai_if_else"
            ]
        },
        "hints": [
            {
                "title": "게임의 목표",
                "content": "아이템을 적절하게 사용해서 돌을 피해보세요.",
                "detail": "아이템을 적절하게 사용해서 돌을 피해보세요.",
                "image": "29-map"
            },
            {
                "title": "아이템",
                "content": "아이템은 어떻게 얻고 사용하나요?",
                "detail": "돌들을 이리저리 잘 피해 나가더라도 앞이 모두 돌들로 꽉 막혀있을 땐 빠져나갈 방법이 없겠지? 그럴 때에는 아이템사용 블럭을 사용해봐. <br>이 블록은 내 앞의 돌들을 모두 없애는 블록이야.<br>단, 아이템이 있어야지만 블록을 사용할 수 있고, 아이템은 이미지를 지나면 얻을 수 있어.",
                "image": 30
            },
            {
                "title": "물체 이름 확인",
                "content": "앞으로 만날 물체의 이름을 확인해서 무엇을 할 수 있나요?",
                "detail": "아이템을 얻기위해서는 아이템이 어디에 있는지 확인할 필요가 있어. <br>그럴 때 사용할 수 있는 블록이 [위쪽] 물체는 [아이템]인가? 블록이야.<br>이 블록을 활용하면 아이템이 어느 위치에 있는지 알 수 있고 아이템이 있는 방향으로 움직이도록 블록을 조립할 수 있어.",
                "image": 29
            }
        ],
        "intro": {
            "content": "훌륭해! 이제 지구까지 얼마 안 남았어. 그런데 앞을 보니 돌들로 길이 꽉 막혀서 지나갈 수가 없잖아? 하지만 걱정하지 마. 아이템을 획득해서 사용하면 앞에 있는 꽉 막힌 돌들을 없앨 수 있다고!",
            "textContent": '훌륭해! 이제 지구까지 얼마 안 남았어. 그런데 앞을 보니 돌들로 길이 꽉 막혀서 지나갈 수가 없잖아? 하지만 걱정하지 마. 아이템을 획득해서 사용하면 앞에 있는 꽉 막힌 돌들을 없앨 수 있어!'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": 'use_item(); 명령어로 나를 오른쪽 행성까지 이동시켜줘!',
            "object": StudyData.OBJECT_AI_COMPOUND,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_4,
            "operation": {
                title: Lang.Menus.study_ai_operation9_title,
                content : [{
                    description: "돌들을 잘 피해 나가다가도, 앞이 모두 돌들로 꽉 막혀 있을 땐 아이템을 사용해야해. 아이템은 use_item(); 이라는 명령어로 사용할 수 있어! 이 명령어를 사용하면 내 앞의 모든 돌들을 없앨 수 있어. 하지만 아이템은 <span class='itemImg'></span>을 지나가야 획득할 수 있다는 것을 잊지마!",
                    contentStyle: 'ai_operation9_1 ' + Lang.type,
                    descStyle: 'descStyle4'
                }]
            }
        }
    },
    32: {
        "gridSize": {
            width: 5,
            height: 3
        },
        "tileSize": 100,
        "bitmapPath": "/img/assets/ntry/bitmap/ai/",
        "limitBlockCnt": 32,
        "availableCode": [
            [ {type: "ai_move_right"} ],
            [ {type: "ai_move_up"} ],
            [ {type: "ai_move_down"} ],
            [ {type: "ai_use_item"} ],
            [ {type: "ai_repeat_until_reach"} ],
            [ {type: "ai_if_else_1"} ],
            [
                {
                    type: "ai_if_else",
                    params: [
                        null,
                        {
                            "type": "Indicator",
                            "img": "../../../img/assets/week/blocks/if.png",
                            "size": 12
                        },
                        null
                    ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'UP', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'RIGHT', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_distance",
                    params: [
                        'DOWN', null,
                        {
                            "type": "text",
                            "params": [ "1" ]
                        }
                   ]
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['UP', 'ITEM']
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['RIGHT', 'ITEM']
                }
            ],
            [
                {
                    type: "ai_boolean_object",
                    params: ['DOWN', 'ITEM']
                }
            ],
            [ { type: "ai_boolean_and" } ],
            [
                {
                    type: "ai_distance_value",
                    params: ['UP']
                }
            ],
            [
                {
                    type: "ai_distance_value",
                    params: ['RIGHT']
                }
            ],
            [
                {
                    type: "ai_distance_value",
                    params: ['DOWN']
                }
            ]
        ],
        "maxItem": 3,
        "mapper": true,
        "hints": [
            {
                "title": "게임의 목표",
                "content": "지금까지 배운 것들을 모두 활용해서 최대한 멀리 가보세요.",
                "detail": "지금까지 배운 것들을 모두 활용해서 최대한 멀리 가보세요.",
                "image": "30-map"
            },
            {
                "title": "그리고",
                "content": "그리고 블록은 어떻게 사용하나요?",
                "detail": "그리고 블록에는 여러개의 조건을 넣을 수 있어, 넣은 모든 조건이 사실일때만 사실이 되어 만약 블록 안에 있는 블록이 실행되고, 하나라도 거짓이 있으면 거짓으로 인식해서 그 안에 있는 블록을 실행하지 않아",
                "image": 31
            }
        ],
        "intro": {
            "content": "좋아! 드디어 저기 지구가 보여! 이럴 수가! 이제는 날아오는 돌들을 미리 볼 수가 없잖아? 돌들이 어떻게 날아올지 알지 못해도 지금까지처럼만 움직이면 잘 피할 수 있을 것 같아! 지구까지 가보는 거야!",
            "textContent": '좋아! 드디어 저기 지구가 보여! 이럴 수가! 이제는 날아오는 돌들을 미리 볼 수가 없잖아? 돌들이 어떻게 날아올지 알지 못해도 지금까지처럼만 움직이면 잘 피할 수 있을 것 같아! 지구까지 가보는 거야!'
        },
        "blockMenuAlign": "LEFT",
        "popups": {
            "objective": '지금까지 배운 명령어들을 활용하여 나를 최대한 멀리 이동시켜줘!',
            "object": StudyData.OBJECT_AI_COMPOUND,
            "command": Ntry.STATIC.COMMAND_AI_TYPE_4
        }
    }
}

/*
 * Generate tile entities. wall and road only.
 */
StudyData.tileMap = {
    1: [
        ["wall_01", "wall_01", "wall_01", "wall_02", "wall_03", "wall_04", "wall_09"],
        ["wall_01", "wall_01", "wall_01", "wall_07", "wall_07", "wall_07", "wall_07"],
        ["wall_01", "wall_01", "wall_01", "road_01", "road_02", "road_02", "road_03"],
        ["wall_01", "wall_01", "wall_01", "wall_07_2", "wall_07_2", "wall_07_2", "wall_07_2"],
        ["wall_01", "wall_01", "wall_01", "wall_11_2", "wall_16", "wall_16", "wall_16"]
    ],
    2: [
        ["wall_01","wall_07","wall_07","wall_obstacle_01","wall_07","wall_obstacle_01","wall_07"],
        ["wall_01","road_03","road_03","road_03","road_03","road_03","road_03"],
        ["wall_01","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2"],
        ["wall_01","wall_01","wall_13","wall_13","wall_08_4","wall_01","wall_01"],
        ["wall_01","wall_11_2","wall_14","wall_14","wall_01","wall_01","wall_01"]
    ],
    3: [
        ["wall_01","wall_08_1","wall_07","wall_07","wall_09","wall_09","wall_12"],
        ["wall_01","wall_07","road_08","road_09","wall_01","wall_01","wall_01"],
        ["wall_01","road_01","road_03","wall_07_2","wall_01","wall_01","wall_01"],
        ["wall_01","wall_07_2","wall_07_2","wall_13","wall_01","wall_01","wall_01"],
        ["wall_01","wall_11_1","wall_12","wall_14","wall_01","wall_01","wall_01"]
    ],
    4: [
        ["wall_13","wall_13","wall_01","wall_01","wall_01","wall_13","wall_13"],
        ["wall_14","wall_14","wall_01","wall_obstacle_01","wall_01","wall_14","wall_14"],
        ["wall_12","wall_07_4","road4_L","road_02","road4_R","wall_07_3","wall_12"],
        ["wall_12","wall_07_4","road4_02","wall_15","road4_01","wall_07_3","wall_12"],
        ["wall_01","wall_01","wall_01","wall_08_4","wall_01","wall_01","wall_01"]
    ],
    5: [
        ["wall_01","wall_01","wall_01","wall_01","wall_07","wall_07","wall_01"],
        ["wall_01","wall_12","wall_12","wall_01","road_10","road_02","wall_01"],
        ["wall_01","wall_07","wall_07","wall_obstacle_01","road_02","wall_obstacle_03","wall_01"],
        ["wall_01","road_02","road_02","road_02","road_03","wall_13","wall_01"],
        ["wall_01","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_14","wall_01"]
    ],
    6: [
        ["wall_10","wall_02","wall_03","wall_03","wall_04","wall_10","wall_10"],
        ["wall_01","wall_07","wall_07","wall_07","wall_07","wall_01","wall_01"],
        ["wall_01","road_02","road_02","road_08","road_09","wall_01","wall_01"],
        ["wall_01","wall_07_2","wall_07_2","road_02","wall_07_2","wall_01","wall_01"],
        ["wall_08_3","wall_06_1","wall_06_2","wall_01","wall_01","wall_01","wall_01"]
    ],
    7: [
        ["wall_01","wall_01","wall_07_4","road_04","wall_07_3","wall_15","wall_03_2"],
        ["wall_01","wall_01","wall_obstacle_02","road_04","wall_07_3","wall_12","wall_03_2"],
        ["wall_01","wall_01","wall_07_4","road_04","wall_07_3","wall_12","wall_04_2"],
        ["wall_01","wall_09_2","wall_07_4","road_04","wall_obstacle_03","wall_01","wall_01"],
        ["wall_01","wall_01","wall_07_4","road_04","wall_07_3","wall_01","wall_01"]
    ],
    8: [
       ["wall_16","wall_02","wall_03","wall_03","wall_03","wall_04","wall_16"],
       ["wall_12","wall_12","wall_12","wall_12","wall_12","wall_12","wall_12"],
       ["road_02","road_02","road_02","road_02","road_02","road_02","road_02"],
       ["wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2"],
       ["wall_13","wall_13","wall_13","wall_13","wall_01","wall_01","wall_01"]
    ],
    9: [
        ["wall_01","wall_01","wall_01","wall_03","wall_03","wall_01","wall_16"],
        ["wall_07","wall_07","wall_obstacle_01","wall_07","wall_07","wall_obstacle_01","wall_07"],
        ["road_02","road_02","road_02","road_02","road_02","road_02","road_02"],
        ["wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2","wall_07_2"],
        ["wall_13","wall_13","wall_13","wall_13","wall_01","wall_01","wall_01"]
    ],
    10: [
        ["wall_01","wall_01","wall_01","wall_12","wall_01","wall_12","wall_03_2"],
        ["wall_01","wall_01","road_04","wall_12","road_04","wall_12","wall_03_2"],
        ["wall_01","wall_01","road_04","wall_12","road_04","wall_12","wall_02"],
        ["wall_01","wall_01","road_02","road_02","road_03","wall_12","wall_01"],
        ["wall_01","wall_01","wall_07_2","wall_07_2","wall_07_2","wall_12","wall_01"],
    ],
    11: [
        ["wall_01","wall_07","wall_07","wall_07","wall_07","wall_07","wall_03_2"],
        ["wall_01","road_05","road_05","road_05","road_05","road_08","wall_03_2"],
        ["wall_01","wall_07_2","wall_07_2","wall_07_2","wall_07_2","road_08","wall_04_2"],
        ["wall_01","wall_12","wall_12","wall_12","wall_12","road_08","wall_13"],
        ["wall_01","wall_07","wall_07","wall_07","wall_07","road_08","wall_14"],
        ["wall_01","road_05","road_05","road_05","road_05","road_05","wall_16"],
    ],
    12: [
        ["wall_01","wall_01","wall_01","wall_01","wall_01","wall_01","wall_15"],
        ["wall_01","wall_01","wall_01","wall_01","wall_07","wall_obstacle_01","road_10"],
        ["wall_01","wall_01","wall_07","wall_obstacle_01","road_10","road_12","road_03"],
        ["wall_07","wall_obstacle_01","road_10","road_12","road_03","wall_07_2","wall_07_2"],
        ["road_02","road_12","road_03","wall_07_2","wall_07_2","wall_12","wall_12"]
    ],
    13: [
        ["wall_01","wall_02","wall_03","wall_04","wall_01","wall_02","wall_01"],
        ["wall_04","wall_01","wall_01","wall_03","wall_02","wall_03","wall_02"],
        ["wall_03","road_02","road_02","road_02","road_02","wall_01","wall_04"],
        ["wall_02","wall_04","wall_03","wall_01","wall_03","wall_02","wall_03"],
        ["wall_01","wall_02","wall_04","wall_04","wall_01","wall_01","wall_04"]
    ],
    14: [
        ["wall_01","wall_02","wall_03","wall_04","wall_01","wall_02","wall_03"],
        ["wall_04","road_02","road_02","road_05","wall_03","wall_01","wall_02"],
        ["wall_02","wall_03","wall_01","road_01","wall_01","wall_04","wall_04"],
        ["wall_03","wall_04","wall_02","road_06","road_02","road_02","wall_01"],
        ["wall_04","wall_03","wall_01","wall_03","wall_02","wall_01","wall_02"]
    ],
    15: [
        ["wall_01","wall_02","wall_03","road_01","wall_04","wall_02","wall_03"],
        ["wall_02","wall_01","wall_04","road_01","wall_01","wall_02","wall_03"],
        ["wall_04","road_02","road_02","road_03","road_02","road_02","wall_04"],
        ["wall_03","wall_01","wall_02","road_01","wall_01","wall_03","wall_01"],
        ["wall_01","wall_02","wall_03","road_01","wall_03","wall_01","wall_04"]
    ],
    16: [
        ["wall_01","wall_02","wall_03","wall_04","wall_02","wall_03","wall_01"],
        ["wall_02","wall_03","wall_01","wall_02","wall_04","wall_02","wall_03"],
        ["road_02","road_02","road_02","road_02","road_02","road_02","road_02"],
        ["wall_03","wall_04","wall_02","wall_01","wall_03","wall_02","wall_01"],
        ["wall_01","wall_02","wall_04","wall_02","wall_01","wall_03","wall_04"]
    ],
    17: [
        ["wall_01","wall_02","wall_03","wall_01","wall_04","wall_02","wall_01"],
        ["wall_02","wall_01","wall_04","wall_02","road_04","road_02","road_02"],
        ["wall_01","wall_02","road_04","road_02","road_07","wall_01","wall_02"],
        ["road_04","road_02","road_07","wall_04","wall_01","wall_02","wall_03"],
        ["road_01","wall_04","wall_01","wall_02","wall_04","wall_01","wall_02"]
    ],
    18: [
        ["wall_04","wall_03","wall_02","wall_01","wall_05","wall_04","wall_03"],
        ["wall_01","wall_02","road_02","road_02","road_10","wall_01","wall_02"],
        ["wall_03","wall_01","wall_01","wall_03","road_01","wall_02","wall_01"],
        ["wall_01","wall_02","wall_04","wall_01","road_01","wall_01","wall_02"],
        ["road_02","road_02","road_02","road_02","road_11","wall_06","road_02"]
    ],
    19: [
        ["wall_05","wall_01","wall_04","wall_02","wall_03","wall_01","wall_02"],
        ["road_08","road_02","road_02","road_02","road_09","wall_06","road_02"],
        ["road_01","wall_04","wall_01","wall_03","road_01","wall_02","wall_01"],
        ["road_01","wall_04","wall_03","wall_01","road_01","wall_01","wall_03"],
        ["road_01","wall_01","wall_04","wall_03","wall_04","wall_03","wall_04"]
    ],
    20: [
        ["wall_01","wall_04","road_01","wall_02","wall_03","road_01","wall_02"],
        ["wall_02","wall_01","road_01","wall_01","wall_04","road_01","wall_04"],
        ["road_02","road_02","road_03","road_02","road_02","road_03","road_02"],
        ["wall_01","wall_02","road_01","wall_03","wall_03","road_01","wall_01"],
        ["wall_04","wall_03","road_01","wall_04","wall_04","road_01","wall_03"]
    ],
    21: [
        ["wall_01","road_01","wall_02","road_01","wall_04","road_01","wall_02"],
        ["wall_04","wall_05","wall_02","road_01","wall_02","road_01","wall_03"],
        ["road_02","road_03","road_02","road_03","road_02","road_03","wall_06"],
        ["wall_03","road_01","wall_02","road_01","wall_01","road_01","wall_02"],
        ["wall_01","road_01","wall_03","road_01","wall_04","road_01","wall_01"]
    ],
    22: [
        ["wall_01","wall_02","road_01","wall_04","road_01","wall_03","road_01"],
        ["wall_02","wall_04","road_01","wall_01","road_01","wall_02","wall_05"],
        ["road_02","wall_06","road_03","road_02","road_03","road_02","road_01"],
        ["wall_03","wall_01","road_01","wall_03","road_01","wall_01","road_01"],
        ["wall_01","wall_02","road_01","wall_01","road_01","wall_02","road_01"]
    ]
};

StudyData.fence_behind = {
    1: [
        {image: "handrail_02", x: 3, y: 1},
        {image: "handrail_02", x: 4, y: 1},
        {image: "handrail_02", x: 5, y: 1},
        {image: "handrail_02", x: 6, y: 1}
    ],
    2: [
       {image: "handrail_10", x: 1, y: 0},
       {image: "handrail_10", x: 2, y: 0},
       {image: "handrail_10", x: 4, y: 0},
       {image: "handrail_10", x: 6, y: 0}
    ],
    3: [
        {image: "handrail_10", x:1, y:1},
        {image: "handrail_09", x:2, y:0},
        {image: "handrail_10", x:3, y:0}
    ],
    5: [
        {image: "handrail_10", x:1, y:2},
        {image: "handrail_10", x:2, y:2},
        {image: "handrail_01", x:4, y:0},
        {image: "handrail_02", x:5, y:0},
        {image: "handrail_13", x:4, y:1},
    ],
    6: [
        {image: "handrail_10", x:1, y:1},
        {image: "handrail_10", x:2, y:1},
        {image: "handrail_10", x:3, y:1},
        {image: "handrail_10", x:4, y:1},
        {image: "handrail_10", x:2, y:1},
        {image: "handrail_10", x:4, y:1}

    ],
    8: [
        {image: "handrail_10", x:0, y:1},
        {image: "handrail_10", x:1, y:1},
        {image: "handrail_10", x:2, y:1},
        {image: "handrail_10", x:3, y:1},
        {image: "handrail_10", x:4, y:1},
        {image: "handrail_10", x:5, y:1},
        {image: "handrail_10", x:6, y:1}
    ],
    9: [
        {image: "handrail_02", x:0, y:1},
        {image: "handrail_02", x:1, y:1},
        {image: "handrail_02", x:3, y:1},
        {image: "handrail_02", x:4, y:1},
        {image: "handrail_02", x:6, y:1}
    ],
    11: [
        {image: "handrail_02", x:1, y:0},
        {image: "handrail_02", x:2, y:0},
        {image: "handrail_02", x:3, y:0},
        {image: "handrail_02", x:4, y:0},
        {image: "handrail_02", x:5, y:0},
        {image: "handrail_02", x:1, y:4},
        {image: "handrail_02", x:2, y:4},
        {image: "handrail_02", x:3, y:4},
        {image: "handrail_02", x:4, y:4},
    ]
}

StudyData.fence_front = {
    1: [
        {image: "handrail_02", x: 3, y: 2},
        {image: "handrail_02", x: 4, y: 2},
        {image: "handrail_02", x: 5, y: 2},
        {image: "handrail_02", x: 6, y: 2}
    ],

    2: [
        {image: "handrail_02", x: 1, y: 1},
        {image: "handrail_02", x: 2, y: 1},
        {image: "handrail_02", x: 3, y: 1},
        {image: "handrail_02", x: 4, y: 1},
        {image: "handrail_02", x: 5, y: 1},
        {image: "handrail_02", x: 6, y: 1}
    ],

    3: [
        {image: "handrail_02", x:1, y:2},
        {image: "handrail_06", x:2, y:2},
        {image: "handrail_04", x:2, y:1},
        {image: "handrail_02", x:3, y:1}
    ],
    4: [
        {image: "handrail_02", x:3, y:2},
        {image: "handrail_11", x:2, y:3},
        {image: "handrail_12", x:4, y:3},
        {image: "handrail_13", x:2, y:2},
        {image: "handrail_14", x:4, y:2}

    ],
    5: [
        {image: "handrail_02", x:1, y:3},
        {image: "handrail_02", x:2, y:3},
        {image: "handrail_06", x:4, y:3},
        {image: "handrail_02", x:3, y:3},
        {image: "handrail_02", x:5, y:1},
        {image: "handrail_15", x:4, y:2},
        {image: "handrail_15", x:4, y:1},
        {image: "handrail_11", x:4, y:2},
    ],
    6: [
        {image: "handrail_02", x:1, y:2},
        {image: "handrail_02", x:2, y:2},
        {image: "handrail_02", x:4, y:2},
        {image: "handrail_05", x:3, y:2},
        {image: "handrail_03", x:3, y:3}
    ],
    8: [
        {image: "handrail_02", x:0, y:2},
        {image: "handrail_02", x:1, y:2},
        {image: "handrail_02", x:2, y:2},
        {image: "handrail_02", x:3, y:2},
        {image: "handrail_02", x:4, y:2},
        {image: "handrail_05", x:3, y:2},
        {image: "handrail_02", x:6, y:2},
    ],
    9: [
        {image: "handrail_02", x:0, y:2},
        {image: "handrail_02", x:1, y:2},
        {image: "handrail_02", x:2, y:2},
        {image: "handrail_02", x:3, y:2},
        {image: "handrail_02", x:4, y:2},
        {image: "handrail_02", x:5, y:2},
        {image: "handrail_02", x:6, y:2},
    ],
    10: [
        {image: "handrail_18", x:2, y: 3},
        {image: "handrail_02", x:3, y: 3},
        {image: "handrail_11", x:3, y: 1},
        {image: "handrail_22", x:3, y: 1},
        {image: "handrail_24", x:3, y: 2},
        {image: "handrail_06", x:4, y: 3},
        {image: "handrail_11", x:4, y: 1},
        {image: "handrail_11", x:4, y: 1},
        {image: "handrail_11", x:4, y: 2},
        {image: "handrail_12", x:2, y: 2},
        {image: "handrail_12", x:2, y: 1}
    ],
    11: [
        {image: "handrail_02", x:1, y:1},
        {image: "handrail_02", x:2, y:1},
        {image: "handrail_02", x:3, y:1},
        {image: "handrail_02", x:4, y:1},
        {image: "handrail_02", x:1, y:5},
        {image: "handrail_02", x:2, y:5},
        {image: "handrail_02", x:3, y:5},
        {image: "handrail_02", x:4, y:5},
        {image: "handrail_06", x:5, y:5},
        {image: "handrail_23", x:5, y:4},
        {image: "handrail_22", x:5, y:3},
        {image: "handrail_22", x:5, y:2},
        {image: "handrail_21", x:5, y:1},
        {image: "handrail_13", x:5, y:0}
    ],
    12 : [
        {image: "handrail_02", x:0, y:4},
        {image: "handrail_02", x:1, y:4},
        {image: "handrail_06", x:2, y:4},
        {image: "handrail_13", x:2, y:3},
        {image: "handrail_02", x:3, y:3},
        {image: "handrail_02", x:4, y:3},
        {image: "handrail_06", x:4, y:3},
        {image: "handrail_13", x:4, y:2},
        {image: "handrail_02", x:5, y:2},
        {image: "handrail_02", x:6, y:2}
    ],
    13: [
        {image: "guardrail_05", x:0, y:1},
        {image: "guardrail_06", x:5, y:1},
        {image: "guardrail_07", x:0, y:3},
        {image: "guardrail_08", x:5, y:3},
        {image: "guardrail_04", x:0, y:2},
        {image: "guardrail_01", x:1, y:1},
        {image: "guardrail_01", x:2, y:1},
        {image: "guardrail_01", x:3, y:1},
        {image: "guardrail_01", x:4, y:1},
        {image: "guardrail_03", x:5, y:2},
        {image: "guardrail_02", x:1, y:3},
        {image: "guardrail_02", x:2, y:3},
        {image: "guardrail_02", x:3, y:3},
        {image: "guardrail_02", x:4, y:3}
    ],
    14: [
        {image: "guardrail_05", x:0, y:0},
        {image: "guardrail_07", x:0, y:2},
        {image: "guardrail_06", x:4, y:0},
        {image: "guardrail_04", x:0, y:1},
        {image: "guardrail_03", x:4, y:1},
        {image: "guardrail_01", x:1, y:0},
        {image: "guardrail_01", x:2, y:0},
        {image: "guardrail_01", x:3, y:0},
        {image: "guardrail_02", x:1, y:2},
        {image: "guardrail_10", x:2, y:2},
        {image: "guardrail_04", x:2, y:3},
        {image: "guardrail_03", x:6, y:3},
        {image: "guardrail_11", x:4, y:2},
        {image: "guardrail_01", x:5, y:2},
        {image: "guardrail_02", x:3, y:4},
        {image: "guardrail_02", x:4, y:4},
        {image: "guardrail_02", x:5, y:4},
        {image: "guardrail_06", x:6, y:2},
        {image: "guardrail_07", x:2, y:4},
        {image: "guardrail_08", x:6, y:4}
    ],
    15: [
        {image: "guardrail_12", x:2, y:1},
        {image: "guardrail_11", x:4, y:1},
        {image: "guardrail_10", x:2, y:3},
        {image: "guardrail_09", x:4, y:3},
        {image: "guardrail_04", x:2, y:0},
        {image: "guardrail_03", x:4, y:0},
        {image: "guardrail_01", x:1, y:1},
        {image: "guardrail_02", x:1, y:3},
        {image: "guardrail_01", x:5, y:1},
        {image: "guardrail_02", x:5, y:3},
        {image: "guardrail_04", x:2, y:4},
        {image: "guardrail_03", x:4, y:4},
        {image: "guardrail_04", x:0, y:2},
        {image: "guardrail_03", x:6, y:2},
        {image: "guardrail_05", x:0, y:1},
        {image: "guardrail_07", x:0, y:3},
        {image: "guardrail_06", x:6, y:1},
        {image: "guardrail_08", x:6, y:3}
    ],
    16: [
        {image: "guardrail_01", x:0, y:1},
        {image: "guardrail_01", x:1, y:1},
        {image: "guardrail_01", x:2, y:1},
        {image: "guardrail_01", x:3, y:1},
        {image: "guardrail_01", x:4, y:1},
        {image: "guardrail_01", x:5, y:1},
        {image: "guardrail_01", x:6, y:1},
        {image: "guardrail_02", x:0, y:3},
        {image: "guardrail_02", x:1, y:3},
        {image: "guardrail_02", x:2, y:3},
        {image: "guardrail_02", x:3, y:3},
        {image: "guardrail_02", x:4, y:3},
        {image: "guardrail_02", x:5, y:3},
        {image: "guardrail_02", x:6, y:3}
    ],
    17: [
        {image: "guardrail_12", x:1, y:2},
        {image: "guardrail_12", x:3, y:1},
        {image: "guardrail_09", x:1, y:4},
        {image: "guardrail_09", x:3, y:3},
        {image: "guardrail_09", x:5, y:2},
        {image: "guardrail_01", x:0, y:2},
        {image: "guardrail_01", x:2, y:1},
        {image: "guardrail_01", x:4, y:0},
        {image: "guardrail_01", x:5, y:0},
        {image: "guardrail_01", x:6, y:0},
        {image: "guardrail_02", x:2, y:4},
        {image: "guardrail_02", x:4, y:3},
        {image: "guardrail_02", x:6, y:2},
        {image: "guardrail_05", x:1, y:1},
        {image: "guardrail_05", x:3, y:0},
        {image: "guardrail_08", x:3, y:4},
        {image: "guardrail_08", x:5, y:3}
    ],
    18: [
        {image: "guardrail_12", x:3, y:0},
        {image: "guardrail_12", x:3, y:3},
        {image: "guardrail_10", x:3, y:2},
        {image: "guardrail_11", x:5, y:3},
        {image: "guardrail_04", x:1, y:1},
        {image: "guardrail_03", x:5, y:0},
        {image: "guardrail_03", x:5, y:1},
        {image: "guardrail_03", x:5, y:2},
        {image: "guardrail_02", x:2, y:2},
        {image: "guardrail_01", x:2, y:0},
        {image: "guardrail_01", x:0, y:3},
        {image: "guardrail_01", x:1, y:3},
        {image: "guardrail_01", x:2, y:3},
        {image: "guardrail_01", x:6, y:3},
        {image: "guardrail_05", x:1, y:0},
        {image: "guardrail_07", x:1, y:2}
    ],
    19: [
        {image: "guardrail_11", x:1, y:0},
        {image: "guardrail_09", x:1, y:2},
        {image: "guardrail_09", x:5, y:2},
        {image: "guardrail_10", x:3, y:2},
        {image: "guardrail_03", x:1, y:3},
        {image: "guardrail_03", x:1, y:4},
        {image: "guardrail_03", x:5, y:3},
        {image: "guardrail_04", x:3, y:3},
        {image: "guardrail_01", x:2, y:0},
        {image: "guardrail_01", x:3, y:0},
        {image: "guardrail_01", x:4, y:0},
        {image: "guardrail_01", x:5, y:0},
        {image: "guardrail_01", x:6, y:0},
        {image: "guardrail_02", x:2, y:2},
        {image: "guardrail_02", x:6, y:2},
        {image: "guardrail_02", x:4, y:4},
        {image: "guardrail_07", x:3, y:4},
        {image: "guardrail_08", x:5, y:4}
    ],
    20: [
        // {image: "guardrail_12", x:1, y:1},
        // {image: "guardrail_13", x:3, y:1},
        // {image: "guardrail_11", x:5, y:1},
        // {image: "guardrail_10", x:1, y:3},
        // {image: "guardrail_14", x:3, y:3},
        // {image: "guardrail_09", x:4, y:3},
        // {image: "guardrail_04", x:1, y:0},
        // {image: "guardrail_04", x:1, y:4},
        // {image: "guardrail_04", x:3, y:0},
        // {image: "guardrail_04", x:3, y:4},
        // {image: "guardrail_03", x:3, y:0},
        // {image: "guardrail_03", x:3, y:4},
        // {image: "guardrail_03", x:5, y:0},
        // {image: "guardrail_03", x:4, y:4},
        // {image: "guardrail_01", x:0, y:1},
        // {image: "guardrail_01", x:6, y:1},
        // {image: "guardrail_02", x:0, y:3},
        // {image: "guardrail_02", x:6, y:3}
    ],
    21: [
        {image: "guardrail_12", x:0, y:1},
        {image: "guardrail_11", x:6, y:1},
        {image: "guardrail_10", x:0, y:3},
        {image: "guardrail_09", x:6, y:3},
        {image: "guardrail_13", x:2, y:1},
        {image: "guardrail_13", x:4, y:1},
        {image: "guardrail_14", x:2, y:3},
        {image: "guardrail_14", x:4, y:3},
        {image: "guardrail_04", x:0, y:0},
        {image: "guardrail_04", x:2, y:0},
        {image: "guardrail_04", x:4, y:0},
        {image: "guardrail_04", x:0, y:4},
        {image: "guardrail_04", x:2, y:4},
        {image: "guardrail_04", x:4, y:4},
        {image: "guardrail_03", x:2, y:0},
        {image: "guardrail_03", x:4, y:0},
        {image: "guardrail_03", x:6, y:0},
        {image: "guardrail_03", x:2, y:4},
        {image: "guardrail_03", x:4, y:4},
        {image: "guardrail_03", x:6, y:4}
    ],
    22: [
        {image: "guardrail_12", x:1, y:1},
        {image: "guardrail_10", x:1, y:3},
        {image: "guardrail_13", x:3, y:1},
        {image: "guardrail_13", x:5, y:1},
        {image: "guardrail_14", x:3, y:3},
        {image: "guardrail_14", x:5, y:3},
        {image: "guardrail_01", x:0, y:1},
        {image: "guardrail_02", x:0, y:3},
        {image: "guardrail_04", x:1, y:0},
        {image: "guardrail_04", x:3, y:0},
        {image: "guardrail_04", x:5, y:0},
        {image: "guardrail_04", x:1, y:4},
        {image: "guardrail_04", x:3, y:4},
        {image: "guardrail_04", x:5, y:4},
        {image: "guardrail_03", x:3, y:0},
        {image: "guardrail_03", x:5, y:0},
        {image: "guardrail_03", x:3, y:4},
        {image: "guardrail_03", x:5, y:4}
    ]


}

StudyData.obstacle = {
    2: [
        {image: "obstacle_02", x:3, y:1, type: Ntry.STATIC.OBSTACLE_ELECTRIC},
        {image: "obstacle_02", x:5, y:1, type: Ntry.STATIC.OBSTACLE_ELECTRIC}
    ],
    4: [
        {image: "obstacle_02", x:3, y:2, type: Ntry.STATIC.OBSTACLE_ELECTRIC}
    ],
    5: [
        {image: "obstacle_01", x:4, y:2, type: Ntry.STATIC.OBSTACLE_ELECTRIC},
        {image: "obstacle_02", x:3, y:3, type: Ntry.STATIC.OBSTACLE_ELECTRIC}
    ],
    7: [
        {image: "obstacle_01", x:3, y:1, type: Ntry.STATIC.OBSTACLE_ELECTRIC},
        {image: "obstacle_03", x:3, y:3, type: Ntry.STATIC.OBSTACLE_ELECTRIC}
    ],
    8: [
        {image: "handrail_02", x:0, y:2},
        {image: "handrail_02", x:1, y:2},
        {image: "handrail_02", x:2, y:2},
        {image: "handrail_02", x:3, y:2},
        {image: "handrail_02", x:4, y:2},
        {image: "handrail_02", x:5, y:2},
        {image: "handrail_02", x:6, y:2}
    ],
    9: [
        {image: "obstacle_02", x:2, y:2, type: Ntry.STATIC.OBSTACLE_ELECTRIC},
        {image: "obstacle_02", x:5, y:2, type: Ntry.STATIC.OBSTACLE_ELECTRIC}
    ],
    12: [
        {image: "obstacle_02", x:1, y:4, type: Ntry.STATIC.OBSTACLE_ELECTRIC},
        {image: "obstacle_02", x:3, y:3, type: Ntry.STATIC.OBSTACLE_ELECTRIC},
        {image: "obstacle_02", x:5, y:2, type: Ntry.STATIC.OBSTACLE_ELECTRIC}
    ],
    13: [
        {image: 'wall_deco1', x:0, y:3, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:1, y:4, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:5, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:6, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:5, y:3, type: Ntry.STATIC.OBSTACLE_BEE}
    ],
    14: [
        {image: 'wall_deco2', x:2, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:5, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:1, y:3, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:1, y:4, type: Ntry.STATIC.OBSTACLE_BEE}
    ],
    15: [
        {image: 'wall_deco2', x:0, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:6, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:1, y:4, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'obstacle_slow', x:3, y:2, type: Ntry.STATIC.OBSTACLE_SLOW}
    ],
    16: [
        {image: 'wall_deco2', x:5, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:6, y:1, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:0, y:3, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:4, y:3, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:1, y:4, type: Ntry.STATIC.OBSTACLE_BEE}
    ],
    17: [
        {image: 'wall_deco1', x:2, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:5, y:4, type: Ntry.STATIC.OBSTACLE_BEE}
    ],
    18: [
        {image: 'wall_deco2', x:1, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco2', x:6, y:0, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:1, y:2, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'wall_deco1', x:6, y:2, type: Ntry.STATIC.OBSTACLE_BEE},
        {image: 'construction', x:5, y:4, type: Ntry.STATIC.OBSTACLE_REPAIR},
        {image: 'construction', x:4, y:0, type: Ntry.STATIC.OBSTACLE_REPAIR}
    ],
    19: [
        {image: 'wall_deco2', x:2, y:3, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'wall_deco1', x:5, y:4, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'construction', x:5, y:1, type: Ntry.STATIC.OBSTACLE_REPAIR},
        {image: 'construction', x:0, y:0, type: Ntry.STATIC.OBSTACLE_REPAIR}
    ],
    20: [
        {image: 'wall_deco2', x:6, y:4, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'obstacle_slow', x:2, y:2, type: Ntry.STATIC.OBSTACLE_SLOW},
        {image: 'obstacle_slow', x:5, y:2, type: Ntry.STATIC.OBSTACLE_SLOW}
    ],
    21: [
        {image: 'construction', x:1, y:1, type: Ntry.STATIC.OBSTACLE_REPAIR},
        {image: 'construction', x:6, y:2, type: Ntry.STATIC.OBSTACLE_REPAIR},
        {image: 'obstacle_slow', x:3, y:2, type: Ntry.STATIC.OBSTACLE_SLOW}
    ],
    22: [
        {image: 'wall_deco2', x:0, y:4, type: Ntry.STATIC.OBSTACLE_BANANA},
        {image: 'construction', x:1, y:2, type: Ntry.STATIC.OBSTACLE_REPAIR},
        {image: 'construction', x:6, y:1, type: Ntry.STATIC.OBSTACLE_REPAIR},
        {image: 'obstacle_slow', x:3, y:2, type: Ntry.STATIC.OBSTACLE_SLOW}
    ]
};

StudyData.successedStage = [];


StudyData.START = {
    type: "maze_step_start",
    x: 50,
    y: 30,
    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
    copyable: false
};

StudyData.player = {
    1: {
        x: 3,
        y: 2,
        code: [
            [
                StudyData.START,
                {
                    type: "maze_step_move_step",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                },
                {
                    type: "maze_step_move_step",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    2: {
        x: 1,
        y: 1,
        code: [
            [
                StudyData.START,
                {
                    type: "maze_step_move_step",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                },
                {
                    type: "maze_step_jump",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    3: {
        x: 1,
        y: 2,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    4: {
        x: 2,
        y: 3,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    5: {
        x: 1,
        y: 3,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    6: {
        x: 1,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    7: {
        x: 3,
        y: 2,
        direction: Ntry.STATIC.SOUTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    8: {
        x: 0,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START,
                {
                    type: "maze_step_for",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    params: [2],
                    statements: [
                        [
                            {
                                type: "maze_step_move_step",
                                copyable: false,
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    9: {
        x: 0,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    10: {
        x: 4,
        y: 1,
        direction: Ntry.STATIC.SOUTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    11: {
        x: 1,
        y: 5,
        direction: Ntry.STATIC.SOUTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    12: {
        x: 0,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    13: {
        x: 1,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START,
                {
                    type: "jr_go_straight",
                    copyable: false
                }
            ]
        ]
    },
    14: {
        x: 1,
        y: 1,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    15: {
        x: 1,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    16: {
        x: 0,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    17: {
        x: 0,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    18: {
        x: 0,
        y: 4,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START,
                {type: "jr_repeat_until_dest",
                    values: {
                        "STATEMENT": [
                            {
                                type: "jr_go_straight",
                                copyable: false
                            },
                            {
                                type: "jr_if_construction",
                                copyable: false
                            }
                        ]
                    }
                }
            ]
        ]
    },
    19: {
        x: 0,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    20: {
        x: 0,
        y: 2,
        direction: Ntry.STATIC.EAST,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    21: {
        x: 1,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    22: {
        x: 6,
        y: 4,
        direction: Ntry.STATIC.NORTH,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    23: {
        x: 0,
        y: 1,
        code: [
            [
                StudyData.START,
                {
                    type: "ai_move_right",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                },
                {
                    type: "ai_move_right",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    24: {
        x: 0,
        y: 2,
        code: [
            [
                StudyData.START
            ]
        ]
    },
    25: {
        x: 0,
        y: 2,
        code: [
            [
                StudyData.START,
                {
                    type: "ai_repeat_until_reach",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    26: {
        x: 0,
        y: 1,
        code: [
            [
                StudyData.START,
                {
                    "type":"ai_repeat_until_reach",
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    copyable: false,
                    "statements":[
                        [
                            {
                                "type":"ai_if_else",
                                copyable: false,
                                params: [
                                    null,
                                    {
                                        "type": "Indicator",
                                        "img": "../../../img/assets/week/blocks/if.png",
                                        "size": 12
                                    },
                                    null
                                ],
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                "statements":[
                                    [
                                        {
                                            "type":"ai_move_right",
                                            copyable: false,
                                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                        }
                                    ],
                                    []
                                ]
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    27: {
        x: 0,
        y: 1,
        code: [
            [ StudyData.START ]
        ]
    },
    28: {
        x: 0,
        y: 1,
        code: [
            [
                StudyData.START,
                {
                    "type":"ai_repeat_until_reach",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    "statements":[
                        [
                            {
                                "type":"ai_if_else",
                                copyable: false,
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                "params":[
                                    {
                                        "type":"ai_boolean_distance",
                                        copyable: false,
                                        deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                        "params":[
                                            "RIGHT",
                                            "BIGGER",
                                            {
                                                "type":"text",
                                                "params":[ "1" ]
                                            }
                                        ]
                                    },
                                    {
                                        "type":"Indicator",
                                        "img":"../../../img/assets/week/blocks/if.png",
                                        "size":12
                                    },
                                    null
                                ],
                                "statements":[
                                    [
                                        {
                                            "type":"ai_move_right",
                                            copyable: false,
                                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                        }
                                    ],
                                    [
                                        {
                                            "type":"ai_if_else",
                                            copyable: false,
                                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                            "params":[
                                                {
                                                    "type":"True"
                                                },
                                                {
                                                    "type":"Indicator",
                                                    "img":"../../../img/assets/week/blocks/if.png",
                                                    "size":12
                                                },
                                                null
                                            ]
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    29: {
        x: 0,
        y: 1,
        code: [
            [
                StudyData.START,
                {
                    type: "ai_repeat_until_reach",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                }
            ]
        ]
    },
    30: {
        x: 0,
        y: 1,
        code: [
            [
                StudyData.START,
                {
                    "type":"ai_repeat_until_reach",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    "statements":[
                        [
                            {
                                "type":"ai_if_else",
                                copyable: false,
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                "params":[
                                    {
                                        "type":"True"
                                    },
                                    {
                                        "type":"Indicator",
                                        "img":"../../../img/assets/week/blocks/if.png",
                                        "size":12
                                    },
                                    null
                                ],
                                "statements":[
                                    [
                                        {
                                            "type":"ai_move_up",
                                            copyable: false,
                                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                        }
                                    ],
                                    [
                                        {
                                            "type":"ai_if_else",
                                            copyable: false,
                                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                            "params":[
                                                {
                                                    "type":"True",
                                                    "movable":null,
                                                    "readOnly":null,
                                                    "copyable":true
                                                },
                                                {
                                                    "type":"Indicator",
                                                    "img":"../../../img/assets/week/blocks/if.png",
                                                    "size":12
                                                },
                                                null
                                            ],
                                            "statements":[
                                                [
                                                    {
                                                        "type":"ai_move_right",
                                                        copyable: false,
                                                        deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                                    }
                                                ],
                                                [
                                                    {
                                                        "type":"ai_if_else",
                                                        deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                                        copyable: false,
                                                        "params":[
                                                            {
                                                                "type":"True"
                                                            },
                                                            {
                                                                "type":"Indicator",
                                                                "img":"../../../img/assets/week/blocks/if.png",
                                                                "size":12
                                                            },
                                                            null
                                                        ],
                                                        "statements":[
                                                            [
                                                                {
                                                                    "type":"ai_move_down",
                                                                    copyable: false,
                                                                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                                                }
                                                            ],
                                                            [
                                                                {
                                                                    "type":"ai_move_right",
                                                                    copyable: false,
                                                                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                                                }
                                                            ]
                                                        ]
                                                    }
                                                ]
                                            ]
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                }
            ]
        ]
    },
    31: {
        x: 0,
        y: 1,
        code: [
            [
                StudyData.START,
                  {
                    "type": "ai_move_right",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                  },
                  {
                    "type": "ai_move_right",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                  },
                  {
                    "type": "ai_use_item",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                  },
                  {
                    "type": "ai_repeat_until_reach",
                    copyable: false,
                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                    statements: [
                        [
                          {
                            "type": "ai_if_else",
                            copyable: false,
                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                            "params": [
                              {
                                "type": "ai_boolean_object",
                                copyable: false,
                                deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                "params": [ "RIGHT", "ITEM" ]
                              },
                              {
                                "type": "Indicator",
                                "img": "../../../img/assets/week/blocks/if.png",
                                "size": 12
                              },
                              null
                            ],
                            "statements": [
                              [
                                {
                                  "type": "ai_move_right",
                                    copyable: false,
                                    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                }
                              ],
                              [
                                {
                                  "type": "ai_if_else",
                                   copyable: false,
                                   deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                  "params": [
                                    {
                                      "type": "True"
                                    },
                                    {
                                      "type": "Indicator",
                                      "img": "../../../img/assets/week/blocks/if.png",
                                      "size": 12
                                    },
                                    null
                                  ],
                                  "statements": [
                                    [
                                      {
                                        "type": "ai_move_down",
                                        copyable: false,
                                        deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                      }
                                    ],
                                    [
                                      {
                                        "type": "ai_if_else",
                                        copyable: false,
                                        deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                        "params": [
                                          {
                                            "type": "ai_boolean_object",
                                            copyable: false,
                                            deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
                                            "params": [ "UP", "ITEM" ],
                                          },
                                          {
                                            "type": "Indicator",
                                            "img": "../../../img/assets/week/blocks/if.png",
                                            "size": 12
                                          },
                                          null
                                        ],
                                        "statements": [
                                          [],
                                          [
                                            {
                                              "type": "ai_use_item",
                                              copyable: false,
                                              deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN
                                            }
                                          ]
                                        ]
                                      }
                                    ]
                                  ]
                                }
                              ]
                            ]
                          }
                        ]
                    ]
                  },
            ]
        ]
    },
    32: {
        x: 0,
        y: 1,
        code: [[StudyData.START]]
    }
};

StudyData.goal = {
    1: [
        {image: "goal", x:6, y:2}
    ],
    2: [
        {image: "goal", x:6, y:1}
    ],
    3: [
        {image: "goal", x:3, y:1}
    ],
    4: [
        {image: "goal", x:4, y:3}
    ],
    5: [
        {image: "goal", x:5, y:1},
    ],
    6: [
        {image: "goal", x:4, y:2},
        {image: "goal", x:3, y:3}
    ],
    7: [
        {image: "goal", x:3, y:4},
        {image: "goal", x:3, y:0}
    ],
    8: [
        {image: "goal", x:6, y:2},
    ],
    9: [
        {image: "goal", x:6, y:2}
    ],
    10: [
        {image: "goal", x:2, y:1}
    ],
    11: [
        {image: "goal", x:1, y:1}
    ],
    12: [
        {image: "goal", x:6, y:1}
    ],
    13: [
        {image: "goal", x:4, y:2}
    ],
    14: [
        {image: "goal", x:5, y:3}
    ],
    15: [
        {image: "goal", x:5, y:2}
    ],
    16: [
        {image: "goal", x:6, y:2}
    ],
    17: [
        {image: "goal", x:6, y:1}
    ],
    18: [
        {image: "goal", x:2, y:1}
    ],
    19: [
        {image: "goal", x:4, y:3}
    ],
    20: [
        {image: "goal", x:6, y:2}
    ],
    21: [
        {image: "goal", x:5, y:4}
    ],
    22: [
        {image: "goal", x:2, y:0}
    ]
};

StudyData.space_map = {
    23: [
         [0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1],
         [0, 0, 0, 0, 0]
    ],
    24: [
         [0, 0, 0, 1, 1, 1, 0],
         [0, 0, 1, 0, 1, 0, 1],
         [0, 1, 1, 1, 0, 1, 1]
    ],
    25: [
         [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
         [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
         [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0]
    ],
    26: [
         [0, 1, 1, 1, 1, 1],
         [0, 0, 0, 0, 1, 0],
         [0, 0, 0, 0, 0, 0]
    ],
    27: [
         [0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1, 0],
         [0, 1, 1, 1, 1, 1]
    ],
    28: [
         [0, 1, 0, 0, 1, 1],
         [0, 0, 0, 1, 0, 1],
         [0, 1, 1, 1, 0, 0]
    ],
    29: [
         [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
         [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
         [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    ],
    30: [
         [0, 0, 1, 1, 1, 0, 2, 0, 1, 0],
         [0, 0, 1, 0, 2, 0, 1, 0, 2, 0],
         [0, 0, 2, 0, 1, 1, 1, 1, 1, 0]
    ],
    31: [
         [0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
         [0, 0, 2, 1, 0, 0, 1, 0, 2, 1],
         [0, 0, 0, 1, 0, 2, 1, 0, 0, 1]
    ]
};

StudyData.help = {
};


StudyData.FRAMES = {};
StudyData.FRAMES[Ntry.STATIC.STAND] = {
    north: {key: 2, frame: [0]},
    east:  {key: 1, frame: [0]},
    south: {key: 0, frame: [0]},
    west:  {key: 1, frame: [0], flip: true},
    next: Ntry.STATIC.STAND,
    movement: 0
};
StudyData.FRAMES[Ntry.STATIC.WALK] = {
    north: {key: 2, frame: _.range(0, 15)},
    east:  {key: 1, frame: _.range(0, 16)},
    south: {key: 0, frame: _.range(0, 15)},
    west:  {key: 1, frame: _.range(0, 16), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 1,
    gridMovement: 1
};
StudyData.FRAMES[Ntry.STATIC.JUMP] = {
    north: {key: 14, frame: _.range(0, 11)},
    east:  {key: 12, frame: _.range(0, 14)},
    south: {key: 13, frame: _.range(0, 11)},
    west:  {key: 12, frame: _.range(0, 14), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 2,
    gridMovement: 2
};
StudyData.FRAMES[Ntry.STATIC.TURN_RIGHT] = {
    north: {key: 15, frame: [4, 3, 2]},
    east:  {key: 15, frame: [2, 1, 0]},
    south: {key: 15, frame: [8, 7, 6]},
    west:  {key: 15, frame: [6, 5, 4]},
    next: Ntry.STATIC.STAND,
    rotation: 1,
    movement: 0
};
StudyData.FRAMES[Ntry.STATIC.TURN_LEFT] = {
    north: {key: 15, frame: [4, 5, 6]},
    east:  {key: 15, frame: [2, 3, 4]},
    south: {key: 15, frame: [8, 0, 1]},
    west:  {key: 15, frame: [6, 7, 8]},
    next: Ntry.STATIC.STAND,
    rotation: -1,
    movement: 0
};
var simoorookFrame = new Array(8).join('0').split('').concat(_.range(0, 7));
StudyData.FRAMES[Ntry.STATIC.SIMOOROOK] = {
    north: {key: 5, frame: simoorookFrame},
    east:  {key: 4, frame: simoorookFrame},
    south: {key: 3, frame: simoorookFrame},
    west:  {key: 4, frame: simoorookFrame, flip: true},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
StudyData.FRAMES[Ntry.STATIC.WALL_CRASH] = {
    north: {key: 8, frame: _.range(0, 12)},
    east:  {key: 6, frame: _.range(0, 11)},
    south: {key: 7, frame: _.range(0, 12)},
    west:  {key: 6, frame: _.range(0, 11), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: -0.3
};
StudyData.FRAMES[Ntry.STATIC.BEE_ATTACK] = {
    north: {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    east : {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    south: {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    west : {key: 10, frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
StudyData.FRAMES[Ntry.STATIC.ELECTRIC_SHOCK] = {
    north: {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    east:  {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    south: {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    west:  {key: 9, frame: [0, 1, 0, 1, 0, 1, 0, 1, 2]},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
StudyData.FRAMES[Ntry.STATIC.SLIP] = {
    north: {key: 11, frame: _.range(0, 6)},
    east:  {key: 11, frame: _.range(0, 6)},
    south: {key: 11, frame: _.range(0, 6)},
    west:  {key: 11, frame: _.range(0, 6)},
    next: Ntry.STATIC.FAIL,
    movement: 0.5
};
StudyData.FRAMES[Ntry.STATIC.STOP] = {};

StudyData.CAR_FRAMES = {};
StudyData.CAR_FRAMES[Ntry.STATIC.STAND] = {
    north: {key: 5, frame: [0]},
    east:  {key: 6, frame: [0]},
    south: {key: 0, frame: [0]},
    west:  {key: 6, frame: [0], flip: true},
    next: Ntry.STATIC.STAND,
    movement: 0
};
StudyData.CAR_FRAMES[Ntry.STATIC.WALK] = {
    north: {key: 5, frame: _.range(0, 4)},
    east:  {key: 6, frame: _.range(0, 4)},
    south: {key: 4, frame: _.range(0, 4)},
    west:  {key: 6, frame: _.range(0, 4), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 1,
    gridMovement: 1
};
StudyData.CAR_FRAMES[Ntry.STATIC.JUMP] = {
    north: {key: 5, frame: _.range(0, 9)},
    east:  {key: 6, frame: _.range(0, 9)},
    south: {key: 4, frame: _.range(0, 9)},
    west:  {key: 6, frame: _.range(0, 9), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 2,
    gridMovement: 2
};
StudyData.CAR_FRAMES[Ntry.STATIC.TURN_RIGHT] = {
    north: {key: 0, frame: [4, 3, 2]},
    east:  {key: 0, frame: [2, 1, 0]},
    south: {key: 0, frame: [0, 7, 6]},
    west:  {key: 0, frame: [6, 5, 4]},
    next: Ntry.STATIC.STAND,
    rotation: 1,
    movement: 0
};
StudyData.CAR_FRAMES[Ntry.STATIC.TURN_LEFT] = {
    north: {key: 0, frame: [4, 5, 6]},
    east:  {key: 0, frame: [2, 3, 4]},
    south: {key: 0, frame: [0, 1, 2]},
    west:  {key: 0, frame: [6, 7, 0]},
    next: Ntry.STATIC.STAND,
    rotation: -1,
    movement: 0
};
//var simoorookFrame = new Array(8).join('0').split('').concat(_.range(0, 7));
StudyData.CAR_FRAMES[Ntry.STATIC.SIMOOROOK] = {
    north: {key: 8, frame: _.range(0, 7)},
    east:  {key: 9, frame: _.range(0, 6)},
    south: {key: 7, frame: _.range(0, 7)},
    west:  {key: 9, frame: _.range(0, 6), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: 0
};
StudyData.CAR_FRAMES[Ntry.STATIC.WALL_CRASH] = {
    north: {key: 2, frame: _.range(0, 12)},
    east:  {key: 3, frame: _.range(0, 12)},
    south: {key: 1, frame: _.range(0, 12)},
    west:  {key: 3, frame: _.range(0, 12), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: -0.3
};

StudyData.CAR_FRAMES[Ntry.STATIC.GO_SLOW_CRASH] = {
    north: {key: 2, frame: _.range(0, 11)},
    east:  {key: 3, frame: _.range(0, 11)},
    south: {key: 1, frame: _.range(0, 11)},
    west:  {key: 3, frame: _.range(0, 11), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: -0.3
};


(function(slowArray){
    StudyData.CAR_FRAMES[Ntry.STATIC.GO_SLOW] = {
        north: {key: 5, frame: slowArray},
        east:  {key: 6, frame: slowArray},
        south: {key: 4, frame: slowArray},
        west:  {key: 6, frame: slowArray, flip: true},
        next: Ntry.STATIC.STAND,
        movement: 2,
        gridMovement: 2
    };
})(_.range(0,8).concat(_.range(0,8)).concat(_.range(0,8)));


StudyData.CAR_FRAMES[Ntry.STATIC.STOP] = {};
