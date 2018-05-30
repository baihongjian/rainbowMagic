'use strict';

var CpartyJRData = {};

CpartyJRData.config = {
    1: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_east"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_1,
                "image": 1,
                "text" : [
                    '사용할 블록을 골랐으면 마우스를 블록 위에 올려놔~',
                    '이제 마우스로 블록을 꾹 누르고~'
                    // '블록 홈에 맞을 때 마우스를 누르던 손가락을 떼!',
                    // '이제 시작하기를 누르면 조립한 블록대로 내가 움직여!'
                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_1
        },
        "theme" : 'jr',
        "playerType" : 'cpartyjr'
    },

    2: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_west"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_2,
                "image": 2,
                "text" : [
                    '사용할 블록을 골랐으면 마우스를 블록 위에 올려놔~',
                    '이제 마우스로 블록을 꾹 누르고~',
                    '블록 홈에 맞을 때 마우스를 누르던 손가락을 떼!',
                    '이제 시작하기를 누르면 조립한 블록대로 내가 움직여!'
                ]
            },
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_2
        },
        "playerType" : 'cpartyjr'
    },
    3: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_north"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_3,
                "image": 3,
                "text" : [
                    '필요 없는 블록이 있구나!',
                    '그럴 땐 필요 없는 블록의 첫 부분을 꾹 눌러',
                    '이제 휴지통 위로 마우스를 옮긴 다음 손가락을 떼면 블록이 없어져!'

                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_3
        },
        "playerType" : 'cpartyjr'
    },
    4: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_south"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_4,
                "image": 4,
                "text" : [
                    '필요 없는 블록이 있구나!',
                    '그럴 땐 필요 없는 블록의 첫 부분을 꾹 눌러',
                    '이제 휴지통 위로 마우스를 옮긴 다음 손가락을 떼면 블록이 없어져!'

                ]
            },
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_4
        },
        "playerType" : 'cpartyjr'
    },
    5: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_5,
                "image": 5,
                "text" : [
                    '필요 없는 블록이 있구나!',
                    '그럴 땐 필요 없는 블록의 첫 부분을 꾹 눌러',
                    '이제 휴지통 위로 마우스를 옮긴 다음 손가락을 떼면 블록이 없어져!'

                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_5
        },
        "playerType" : 'cpartyjr'
    },
    6: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 4,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_6,
                "image": 6,
                "text" : [
                    '필요 없는 블록이 있구나!',
                    '그럴 땐 필요 없는 블록의 첫 부분을 꾹 눌러',
                    '이제 휴지통 위로 마우스를 옮긴 다음 손가락을 떼면 블록이 없어져!'
                ]
            },
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_6
        },
        "playerType" : 'cpartyjr'
    },
    7: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 7,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {type: "cparty_jr_item"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_7,
                "image": 7,
                "text" : [
                    '만약 필요 없는 블록 하나만 삭제하고 싶다면',
                    '필요 없는 블록 하나를 꾹 눌러서 떼어내고',
                    '떨어진 블록에서 다시 필요 없는 블록 밑의 블록 부분만 다시 떼어내',
                    '그리고 필요 없던 블록은 휴지통에 넣고',
                    '필요한 부분만 다시 조립하면 끝~'
                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_7
        },
        "playerType" : 'cpartyjr'
    },
    8: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 7,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {type: "cparty_jr_item"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_8,
                "image": 8,
                "text" : [
                    '만약 필요 없는 블록 하나만 삭제하고 싶다면',
                    '필요 없는 블록 하나를 꾹 눌러서 떼어내고',
                    '떨어진 블록에서 다시 필요 없는 블록 밑의 블록 부분만 다시 떼어내',
                    '그리고 필요 없던 블록은 휴지통에 넣고',
                    '필요한 부분만 다시 조립하면 끝~'
                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_8
        },
        "playerType" : 'cpartyjr'
    },
    9: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 6,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_9,
                "image": 9,
                "text" : [
                    '만약 필요 없는 블록 하나만 삭제하고 싶다면',
                    '필요 없는 블록 하나를 꾹 눌러서 떼어내고',
                    '떨어진 블록에서 다시 필요 없는 블록 밑의 블록 부분만 다시 떼어내',
                    '그리고 필요 없던 블록은 휴지통에 넣고',
                    '필요한 부분만 다시 조립하면 끝~'
                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_9
        },
        "playerType" : 'cpartyjr'
    },
    10: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 8,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {type: "cparty_jr_item"},
            ]
        ],
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_10,
                "image": 10,
                "text" : [
                    '만약 필요 없는 블록 하나만 삭제하고 싶다면',
                    '필요 없는 블록 하나를 꾹 눌러서 떼어내고',
                    '떨어진 블록에서 다시 필요 없는 블록 밑의 블록 부분만 다시 떼어내',
                    '그리고 필요 없던 블록은 휴지통에 넣고',
                    '필요한 부분만 다시 조립하면 끝~'
                ]
            },
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_10
        },
        "playerType" : 'cpartyjr'
    },
    11: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 2,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_repeat",
                    values: {
                        "REPEAT": 3
                    }
                }
            ]
        ],
        "essentialBlock": true,
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_11,
                "image": 11,
                "text" : [
                    '반복 블록을 사용할 때에는 먼저 몇 번 반복 해야 하는지 골라야 해',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '반복 블록 안에 반복할 블록을 넣으면',
                    '선택한 숫자 만큼 블록을 반복할거야.'
                ]
            },
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_11
        },
        "playerType" : 'cpartyjr'
    },
    12: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 4,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {type: "jr_repeat",
                    values: {
                        "REPEAT": 3
                    }
                }
            ]
        ],
        "essentialBlock": true,
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_12,
                "image": 12,
                "text" : [
                    '반복 블록을 사용할 때에는 먼저 몇 번 반복 해야 하는지 골라야 해',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '반복 블록 안에 반복할 블록을 넣으면',
                    '선택한 숫자 만큼 블록을 반복할거야.'
                ]
            },

        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_12
        },
        "playerType" : 'cpartyjr'
    },
    13: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {
                    type: "jr_repeat",
                    values: {
                        "REPEAT" : 3
                    }
                },
            ]
        ],
        "essentialBlock": true,
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_13,
                "image": 13,
                "text" : [
                    '반복 블록을 사용할 때에는 먼저 몇 번 반복 해야 하는지 골라야 해',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '반복 블록 안에 반복할 블록을 넣으면',
                    '선택한 숫자 만큼 블록을 반복할거야.'
                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_13
        },
        "playerType" : 'cpartyjr'
    },
    14: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 3,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {
                    type: "jr_repeat",
                    values: {
                        "REPEAT" : 3
                    }
                },
            ]
        ],
        "essentialBlock": true,
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_14,
                "image": 14,
                "text" : [
                    '반복 블록을 사용할 때에는 먼저 몇 번 반복 해야 하는지 골라야 해',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '반복 블록 안에 반복할 블록을 넣으면',
                    '선택한 숫자 만큼 블록을 반복할거야.'
                ]
            },
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_14
        },
        "playerType" : 'cpartyjr'
    },
    15: {
        "gridSize": {
            width: 7,
            height: 5
        },
        "tileSize": 68,
        "bitmapPath": "/img/assets/ntry/bitmap/cpartyjr/",
        "limitBlockCnt": 4,
        "availableCode": [
            [
                {type: "jr_east"},
            ],
            [
                {type: "jr_west"},
            ],
            [
                {type: "jr_north"},
            ],
            [
                {type: "jr_south"},
            ],
            [
                {
                    type: "jr_repeat",
                    values: {
                         "REPEAT": 3
                    }
                },
            ]
        ],
        "essentialBlock": true,
        "hints": [
            {
                "content": Lang.Menus.cparty_jr_intro_15,
                "image": 15,
                "text" : [
                    '반복 블록을 사용할 때에는 먼저 몇 번 반복 해야 하는지 골라야 해',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '네모 상자를 눌러서 숫자를 고르고~',
                    '반복 블록 안에 반복할 블록을 넣으면',
                    '선택한 숫자 만큼 블록을 반복할거야.'
                ]
            }
        ],
        "intro": {
            "content": Lang.Menus.cparty_jr_intro_15
        },
        "playerType" : 'cpartyjr'
    }

}

// /*
//  * Generate tile entities. wall and road only.
//  */
CpartyJRData.tileMap = {
    1: [
        ["wall_15", "wall_16", "wall_17", "wall_18", "wall_19", "wall_20", "wall_20"],
        ["wall_01", "wall_03", "wall_03", "wall_01", "wall_04", "wall_13", "wall_02"],
        ["wall_01", "road", "road", "road", "road", "wall_03", "wall_04"],
        ["wall_03", "wall_01", "wall_01", "wall_02", "wall_02", "wall_02", "wall_02"],
        ["wall_02", "wall_01", "wall_04", "wall_03", "wall_02", "wall_01", "wall_04"]
    ],
    2: [
        ["wall_14", "wall_15", "wall_16", "wall_17", "wall_18", "wall_19", "wall_14"],
        ["wall_01", "wall_03", "wall_03", "wall_01", "wall_04", "wall_02", "wall_02"],
        ["wall_01", "road", "road", "road", "road", "wall_03", "wall_04"],
        ["wall_03", "wall_01", "wall_01", "wall_02", "wall_02", "wall_02", "wall_02"],
        ["wall_02", "wall_01", "wall_04", "wall_03", "wall_02", "wall_01", "wall_04"]
    ],
    3: [
        ["wall_23","wall_03","wall_02","wall_04","wall_02","wall_03","wall_24"],
        ["wall_24","wall_02","wall_02","road_03","wall_04","wall_01","wall_23"],
        ["wall_23","wall_03","wall_03","road_03","wall_02","wall_01","wall_24"],
        ["wall_24","wall_04","wall_02","road_03","wall_03","wall_02","wall_23"],
        ["wall_23","wall_02","wall_04","road_03","wall_02","wall_01","wall_24"]
    ],
    4: [
        ["wall_23","wall_03","wall_02","wall_04","wall_02","wall_03","wall_23"],
        ["wall_24","wall_02","wall_02","road_03","wall_04","wall_01","wall_24"],
        ["wall_23","wall_03","wall_03","road_03","wall_02","wall_01","wall_23"],
        ["wall_24","wall_04","wall_02","road_03","wall_03","wall_02","wall_24"],
        ["wall_23","wall_02","wall_04","road_03","wall_02","wall_01","wall_23"]
    ],
    5: [
        ["wall_23","wall_02","wall_03","wall_04","wall_02","wall_27","wall_23"],
        ["wall_24","wall_01","wall_01","road_03","wall_04","wall_28","wall_24"],
        ["wall_23","wall_03","road_01","road_03","wall_02","wall_29","wall_23"],
        ["wall_24","wall_04","road_03","wall_02","wall_01","wall_30","wall_24"],
        ["wall_23","wall_03","wall_04","wall_01","wall_02","wall_31","wall_23"]
    ],
    6: [
        ["wall_23","wall_24","wall_23","wall_02","wall_03","wall_02","wall_27"],
        ["wall_24","wall_23","wall_04","wall_01","road_03","wall_03","wall_28"],
        ["wall_23","wall_02","wall_01","road_01","road_03","wall_04","wall_29"],
        ["wall_24","wall_01","road_05","road_03","wall_03","wall_02","wall_30"],
        ["wall_23","wall_04","wall_01","wall_02","wall_03","wall_04","wall_31"]
    ],
    7: [
        ["wall_14", "wall_15", "wall_16", "wall_17", "wall_18", "wall_19", "wall_14"],
        ["wall_04","wall_01","wall_01","wall_01","wall_04","wall_02","wall_03"],
        ["road","road","road","road","road","road","wall_04"],
        ["wall_03","wall_04","wall_01","wall_01","wall_01","wall_03","wall_02"],
        ["wall_02","wall_03","wall_04","wall_01","wall_02","wall_03","wall_04"]
    ],
    8: [
        ["wall_33","wall_02","wall_03","wall_04","wall_02","wall_02","wall_23"],
        ["wall_34","wall_01","road","road","road_03","wall_02","wall_14"],
        ["wall_23","wall_03","wall_01","wall_04","road_03","wall_04","wall_24"],
        ["wall_35","wall_04","road","road","road_03","wall_03","wall_23"],
        ["wall_34","wall_02","wall_04","wall_01","wall_02","wall_03","wall_14"]
    ],
    9: [
        ["wall_01","wall_02","wall_03","wall_04","wall_02","wall_02","wall_03"],
        ["wall_04","wall_01","road_05","road_05","road_03","road_03","wall_02"],
        ["wall_02","wall_02","road_02","wall_02","road_05","road_03","wall_04"],
        ["wall_03","road_01","road_01","road_05","wall_04","road_03","wall_02"],
        ["wall_02","wall_03","road_01","road_01","road_03","road_03","wall_04"]
    ],
    10: [
        ["wall_01","wall_02","wall_03","wall_02","wall_04","wall_14","wall_23"],
        ["wall_04","road_05","road","road_03","wall_02","wall_04","wall_24"],
        ["wall_02","road_03","wall_02","road_02","road","wall_02","wall_14"],
        ["wall_02","road_03","wall_02","wall_02","wall_02","wall_01","wall_23"],
        ["wall_04","wall_03","wall_02","wall_24","wall_14","wall_23","wall_14"]
    ],
    11: [
        ["wall_14", "wall_15", "wall_16", "wall_17", "wall_18", "wall_19", "wall_14"],
        ["wall_04","wall_01","wall_01","wall_01","wall_04","wall_02","wall_03"],
        ["road","road","road","road","road","road","wall_04"],
        ["wall_03","wall_04","wall_01","wall_01","wall_01","wall_03","wall_02"],
        ["wall_02","wall_03","wall_04","wall_01","wall_02","wall_03","wall_04"]
    ],
    12: [
        ["wall_01","wall_02","wall_03","wall_04","wall_02","wall_02","wall_23"],
        ["wall_04","road","road","road","road_03","wall_01","wall_24"],
        ["wall_02","wall_04","wall_02","wall_03","road_03","wall_02","wall_23"],
        ["wall_01","wall_04","wall_02","wall_01","road_03","wall_03","wall_24"],
        ["wall_02","wall_03","wall_04","wall_01","road_03","wall_03","wall_23"]
    ],
    13: [
        ["wall_23","wall_04","wall_03","wall_02","wall_03","wall_24","wall_23"],
        ["wall_24","wall_02","road","road_03","wall_01","wall_03","wall_14"],
        ["wall_23","wall_02","wall_02","road_02","road_03","wall_04","wall_14"],
        ["wall_24","wall_14","wall_01","wall_01","road_02","wall_03","wall_14"],
        ["wall_23","wall_23","wall_24","wall_03","wall_02","wall_04","wall_14"]
    ],
    14: [
        ["wall_14","wall_14","wall_14","wall_02","wall_04","wall_03","wall_27"],
        ["wall_23","wall_23","wall_01","wall_03","road_03","wall_04","wall_28"],
        ["wall_24","wall_03","wall_02","road_01","road_03","wall_02","wall_29"],
        ["wall_14","wall_04","road_05","road_03","wall_02","wall_01","wall_30"],
        ["wall_24","wall_03","wall_04","wall_04","wall_01","wall_03","wall_31"]
    ],
    15: [
        ["wall_14","wall_24","wall_14","wall_14","wall_14","wall_03","wall_02"],
        ["wall_14","wall_15","wall_16","wall_03","wall_13","wall_04","road_03"],
        ["wall_14","wall_03","wall_02","wall_01","road_05","road","road_02"],
        ["wall_02","wall_04","road_05","road","road_02","wall_04","wall_02"],
        ["road","road","road_02","wall_02","wall_03","wall_02","wall_04"]
    ]
};

CpartyJRData.fence_behind = {
    1: [
        {image: "image_4", x: 5, y: 0}
    ],
    3: [
        {image: "image_7", x:0, y:3},
        {image: "image_8", x:1, y:3},
        {image: "image_6", x:2, y:3},
    ],
    4: [
        {image: "image_6", x: 4, y: 1},
        {image: "image_7", x: 5, y: 1},
        {image: "image_8", x: 6, y: 1},
    ],
    8: [
        {image: "image_6", x: 5, y:3},
        {image: "image_7", x: 6, y:3}
    ],
    15: [
        {image: "image_4", x: 4, y: 0},
    ]


};

CpartyJRData.item = {
    7: [
        {image: "item", x:2, y:2},
        {image: "item", x:4, y:2}
    ],
    8: [
        {image: 'item', x:4, y:2}
    ],
    10: [
        {image: 'item', x:1, y:2},
        {image: 'item', x:3, y:1}
    ]
};


CpartyJRData.START = {
    type: "jr_start",
    x: 100,
    y: 30,
    readOnly: true,
    deletable: Entry.Block.DELETABLE_FALSE_LIGHTEN,
};

CpartyJRData.player = {
    1: {
        x: 1,
        y: 2,
        code: [
            [
                CpartyJRData.START,
                {type: "jr_east"}
            ]
        ]
    },
    2: {
        x: 4,
        y: 2,
        code: [
            [
                CpartyJRData.START,
                {type: "jr_west"}
            ]
        ],
        direction: Ntry.STATIC.WEST
    },
    3: {
        x: 3,
        y: 4,
        code: [
            [
                CpartyJRData.START,
           ]
        ],
        direction: Ntry.STATIC.NORTH
    },
    4: {
        x: 3,
        y: 1,
        code: [
            [
                CpartyJRData.START
           ]
        ],
        direction: Ntry.STATIC.SOUTH
    },
    5: {
        x: 2,
        y: 3,
        code: [
            [
                CpartyJRData.START
           ]
        ],
        direction: Ntry.STATIC.NORTH
    },
    6: {
        x: 2,
        y: 3,
        code: [
            [
                CpartyJRData.START
           ]
        ]
    },
    7: {
        x: 0,
        y: 2,
        code: [
            [
                CpartyJRData.START,
                {type: "jr_east"},
                {type: "jr_east"},
                {type: "cparty_jr_item"}
            ]
        ],
        itemCnt:2
    },
    8: {
        x: 2,
        y: 1,
        code: [
            [
                CpartyJRData.START
           ]
        ],
        itemCnt:1
    },
    9: {
        x: 1,
        y: 3,
        code: [
            [
                CpartyJRData.START
           ]
        ]
    },
    10: {
        x: 1,
        y: 3,
        code: [
            [
                CpartyJRData.START
           ]
        ],
        itemCnt:2,
        direction: Ntry.STATIC.NORTH,
    },
    11: {
        x: 0,
        y: 2,
        code: [
            [
                CpartyJRData.START,
                {type: "jr_repeat",
                    values: {
                        "REPEAT": 3
                    }
                }
            ]
        ]
    },
    12: {
        x: 1,
        y: 1,
        code: [
            [
                CpartyJRData.START,
                {type: "jr_repeat",
                    values: {
                        "REPEAT" : 3,
                        "STATEMENT": [
                            {
                                type: "jr_east"
                            }
                        ]
                    }
                }
            ]
        ]
    },
    13: {
        x: 2,
        y: 1,
        code: [
            [
                CpartyJRData.START,
                {type: "jr_repeat",
                    values: {
                        "REPEAT" : 1,
                        "STATEMENT": [
                            {
                                type: "jr_east"
                            },
                            {
                                type: "jr_south"
                            }
                        ]
                    }
                }
            ]
        ]
    },
    14: {
        x: 2,
        y: 3,
        code: [
            [
                CpartyJRData.START
           ]
        ]
    },
    15: {
        x: 0,
        y: 4,
        code: [
            [
                CpartyJRData.START
           ]
        ]
    }
};

CpartyJRData.goal = {
    1: [
        {image: "goal", x:4, y:2}
    ],
    2: [
        {image: "goal", x:1, y:2}
    ],
    3: [
        {image: "goal", x:3, y:1}
    ],
    4: [
        {image: "goal", x:3, y:4}
    ],
    5: [
        {image: "goal", x:3, y:1},
    ],
    6: [
        {image: "goal", x:4, y:1}
    ],
    7: [
        {image: "goal", x:5, y:2}
    ],
    8: [
        {image: "goal", x:2, y:3}
    ],
    9: [
        {image: "goal", x:5, y:1}
    ],
    10: [
        {image: "goal", x:4, y:2}
    ],
    11: [
        {image: "goal", x:5, y:2}
    ],
    12: [
        {image: "goal", x:4, y:4}
    ],
    13: [
        {image: "goal", x:4, y:3}
    ],
    14: [
        {image: "goal", x:4, y:1}
    ],
    15: [
        {image: "goal_school", x:6, y:1}
    ]
};

CpartyJRData.space_map = {
    21: [
         [0, 0, 0, 0, 0],
         [0, 0, 0, 0, 1],
         [0, 0, 0, 0, 0]
    ]
};

CpartyJRData.help = {
};


CpartyJRData.FRAMES = {};
CpartyJRData.FRAMES[Ntry.STATIC.STAND] = {
    north: {key: 2, frame: [0]},
    east:  {key: 1, frame: [0]},
    south: {key: 0, frame: [0]},
    west:  {key: 1, frame: [0], flip: true},
    next: Ntry.STATIC.STAND,
    movement: 0
};
CpartyJRData.FRAMES[Ntry.STATIC.WALK] = {
    north: {key: 2, frame: _.range(0, 15)},
    east:  {key: 1, frame: _.range(0, 16)},
    south: {key: 0, frame: _.range(0, 15)},
    west:  {key: 1, frame: _.range(0, 16), flip: true},
    next: Ntry.STATIC.STAND,
    movement: 1,
    gridMovement: 1
};

CpartyJRData.FRAMES[Ntry.STATIC.TURN_RIGHT] = {
    north: {key: 6, frame: [4, 3, 2]},
    east:  {key: 6, frame: [2, 1, 0]},
    south: {key: 6, frame: [8, 7, 6]},
    west:  {key: 6, frame: [6, 5, 4]},
    next: Ntry.STATIC.STAND,
    rotation: 1,
    movement: 0
};

CpartyJRData.FRAMES[Ntry.STATIC.TURN_LEFT] = {
    north: {key: 6, frame: [4, 5, 6]},
    east:  {key: 6, frame: [2, 3, 4]},
    south: {key: 6, frame: [0, 1, 2]},
    west:  {key: 6, frame: [6, 7, 8]},
    next: Ntry.STATIC.STAND,
    rotation: -1,
    movement: 0
};

CpartyJRData.FRAMES[Ntry.STATIC.WALL_CRASH] = {
    north: {key: 5, frame: _.range(0, 12)},
    east:  {key: 3, frame: _.range(0, 10)},
    south: {key: 4, frame: _.range(0, 10)},
    west:  {key: 3, frame: _.range(0, 10), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: -0.3
};

CpartyJRData.FRAMES[Ntry.STATIC.GET_ITEM] = {
    north: {key: 9, frame: _.range(0, 8)},
    east:  {key: 8, frame: _.range(0, 8)},
    south: {key: 7, frame: _.range(0, 8)},
    west:  {key: 8, frame: _.range(0, 8), flip: true},
    movement: 0,
    next: Ntry.STATIC.STAND
};

CpartyJRData.FRAMES[Ntry.STATIC.HALF_ROTATION] = {
    north: {key: 6, frame: _.range(4, 8)},
    east:  {key: 6, frame: _.range(2, 6)},
    south: {key: 6, frame: [8,7,6,5,4]},
    west:  {key: 6, frame: [6,5,4,3,2]},
    next: Ntry.STATIC.STAND,
    rotation: 2,
    movement: 0
};

CpartyJRData.FRAMES[Ntry.STATIC.SIMOOROOK] = {
    north: {key: 12, frame: _.range(0,6)},
    east:  {key: 11, frame: _.range(0,6)},
    south: {key: 10, frame: _.range(0,6)},
    west:  {key: 11, frame: _.range(0,6), flip: true},
    next: Ntry.STATIC.FAIL,
    movement: 0
};

CpartyJRData.FRAMES[Ntry.STATIC.STOP] = {
    north: {key: 2, frame: [0]},
    east:  {key: 1, frame: [0]},
    south: {key: 0, frame: [0]},
    west:  {key: 1, frame: [0], flip: true},
    next: Ntry.STATIC.STAND,
    movement: 0
};
