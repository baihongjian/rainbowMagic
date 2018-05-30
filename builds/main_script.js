!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
            a.l = !0,
            a.exports
    }
    n.m = e,
        n.c = t,
        n.i = function(e) {
            return e
        }
        ,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/builds/",
        n(n.s = 1070)
}({
    1019: function(e, t) {
        angular.module("mean.common").directive("ngEnter", function() {
            return function(e, t, n) {
                t.bind("keydown", function(t) {
                    13 === t.which ? e.$eval(n.ngEnter, {
                        event: t
                    }) : n.ngAutocomplete && e.$eval(n.ngAutocomplete, {
                        event: t
                    })
                })
            }
        }),
            angular.module("mean.common").directive("onLastRepeatForDiscuss", function() {
                return {
                    restrict: "A",
                    link: function(e, t, n) {
                        e.$last && setTimeout(function() {
                            e.$emit("onLastRepeatForDiscuss")
                        }, 1)
                    }
                }
            }),
            angular.module("mean.common").directive("context", [function() {
                return {
                    restrict: "A",
                    scope: "@&",
                    compile: function(e, t, n) {
                        return {
                            post: function(e, t, n, r) {
                                var a = $("#" + n.context)
                                    , o = null;
                                a.css({
                                    display: "none"
                                }),
                                    $(t).bind("contextmenu", function(t) {
                                        if ("stop" != e.state)
                                            return "objectContext" === n.context ? alert("실행중에는 오브젝트를 수정할 수 없습니다.") : "pictureContext" === n.context ? alert("실행중에는 모양을 수정할 수 없습니다.") : "soundContext" === n.context && alert("실행중에는 소리를 수정할 수 없습니다."),
                                                t.preventDefault(),
                                                !1;
                                        var r = $(t.target).closest("li");
                                        "objectContext" === n.context ? e.$apply(function() {
                                            e.setSelectedById(r.attr("id"))
                                        }) : "pictureContext" === n.context ? e.$apply(function() {
                                            e.setPictureSelected(r.attr("id"))
                                        }) : "soundContext" === n.context && e.$apply(function() {
                                            e.setSoundSelected(r.attr("id"))
                                        }),
                                            t.preventDefault(),
                                            a.css({
                                                position: "fixed",
                                                display: "block",
                                                left: t.clientX + "px",
                                                top: t.clientY - 100 + "px"
                                            }),
                                            o = t.timeStamp
                                    }),
                                    $(document).click(function(e) {
                                        var t = $(e.target);
                                        if (!t.is(".popover") && !t.parents().is(".popover")) {
                                            if (o === e.timeStamp)
                                                return;
                                            a.css({
                                                display: "none"
                                            })
                                        }
                                    }),
                                    $(document).bind("contextmenu", function(e) {
                                        var t = $(e.target);
                                        if (!t.is(".popover") && !t.parents().is(".popover")) {
                                            if (o === e.timeStamp)
                                                return;
                                            a.css({
                                                display: "none"
                                            })
                                        }
                                    })
                            }
                        }
                    }
                }
            }
            ]),
            angular.module("mean.common").constant("keyCodes", {
                esc: 27,
                space: 32,
                enter: 13,
                tab: 9,
                backspace: 8,
                shift: 16,
                ctrl: 17,
                alt: 18,
                capslock: 20,
                numlock: 144
            }).directive("keyBind", ["keyCodes", function(e) {
                return function(t, n, r) {
                    var a = function(t) {
                        var n = {};
                        for (var r in t) {
                            var a = t[r];
                            e.hasOwnProperty(r) && (n[e[r]] = a)
                        }
                        return n
                    }(t.$eval(r.keyBind));
                    n.bind("keydown keypress", function(e) {
                        a.hasOwnProperty(e.which) && t.$apply(function() {
                            t.$eval(a[e.which])
                        })
                    })
                }
            }
            ]),
            angular.module("mean.common").directive("treeModel", ["$compile", function(e) {
                return {
                    restrict: "A",
                    link: function(t, n, r) {
                        var a = r.treeId
                            , o = r.treeModel
                            , i = r.nodeId || "id"
                            , s = r.nodeLabel || "label"
                            , l = r.nodeChildren || "children"
                            , u = '<ul><li data-ng-repeat="node in ' + o + '"><i class="collapsed" data-ng-show="node.' + l + '.length && node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="expanded" data-ng-show="node.' + l + '.length && !node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="normal" data-ng-hide="node.' + l + '.length"></i> <span data-ng-class="node.selected" data-ng-click="' + a + '.selectNodeLabel(node)">{{node.' + s + '}}</span><div data-ng-hide="node.collapsed" data-tree-id="' + a + '" data-tree-model="node.' + l + '" data-node-id=' + i + " data-node-label=" + s + " data-node-children=" + l + "></div></li></ul>";
                        a && o && (r.angularTreeview && (t[a] = t[a] || {},
                                t[a].selectNodeHead = t[a].selectNodeHead || function(e) {
                                    e.collapsed = !e.collapsed
                                }
                                ,
                                t[a].selectNodeLabel = t[a].selectNodeLabel || function(e) {
                                    t[a].currentNode && t[a].currentNode.selected && (t[a].currentNode.selected = void 0),
                                        e.selected = "selected",
                                        t[a].currentNode = e
                                }
                        ),
                            n.html("").append(e(u)(t)))
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("groupHeader", ["$routeParams", function(e) {
                return {
                    restrict: "AE",
                    replace: !0,
                    templateUrl: "/views/groupHeader.html"
                }
            }
            ]),
            angular.module("mean.common").directive("fallbackSrc", function() {
                return {
                    link: function(e, t, n) {
                        t.bind("error", function() {
                            angular.element(this).attr("src", n.fallbackSrc)
                        })
                    }
                }
            }),
            angular.module("mean.common").directive("groupFooter", ["$routeParams", function(e) {
                return {
                    restrict: "AE",
                    scope: {
                        groupId: "="
                    },
                    replace: !0,
                    templateUrl: "/views/groupFooter.html",
                    link: function(e, t, n) {
                        e.imageRoute = "/img/assets/art/group/",
                            e.defaultImg = e.imageRoute + "default.png",
                            e.username = window.user && window.user.username ? window.user.username : "",
                            e.items = [{
                                title: Lang.Menus.study_lesson,
                                image: e.imageRoute + "curriculum.png",
                                overImg: e.imageRoute + "curriculum_hover.png",
                                url: "/tt#!/group/lecture/list/",
                                bgColor: e.imageRoute + "curriculumBG.png"
                            }, {
                                title: Lang.Menus.group_project_share,
                                image: e.imageRoute + "exhibit.png",
                                overImg: e.imageRoute + "exhibit_hover.png",
                                url: "/all#!/group?groupId=",
                                bgColor: e.imageRoute + "exhibitBG.png"
                            }, {
                                title: Lang.Menus.group_discuss,
                                image: e.imageRoute + "discuss.png",
                                overImg: e.imageRoute + "discuss_hover.png",
                                url: "/ds#!/",
                                bgColor: e.imageRoute + "discussBG.png"
                            }, {
                                title: Lang.Menus.my_group,
                                image: e.imageRoute + "go.png",
                                overImg: e.imageRoute + "go_hover.png",
                                url: "/" + e.username + "#!/group",
                                bgColor: e.imageRoute + "goBG.png"
                            }],
                            e.mouseover = !1,
                            e.getTitle = function(e) {
                                var t = window.location.pathname;
                                return t = t.slice(0, 3),
                                    !((e = e.slice(0, 3)) == t)
                            }
                            ,
                            e.goUrl = function(t, n) {
                                3 != n && (t += e.$parent && e.$parent.currentGroup ? e.$parent.currentGroup._id : window.user.primaryGroup);
                                window.location.href = t
                            }
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("projectBox", ["$http", "$cookies", function(e, t) {
                return {
                    restrict: "AE",
                    scope: {
                        project: "=project",
                        user: "=user"
                    },
                    replace: !0,
                    shareCancelPopup: !1,
                    templateUrl: "/views/arts/project_box.html",
                    link: function(n, r, a) {
                        n.isLang = function(e) {
                            return t.get("lang") == e
                        }
                            ,
                            n.personalAgree = {
                                open: !1,
                                use: !1,
                                edit: !1,
                                all: !1
                            },
                            n.cancelAgree = function() {
                                n.projectTermConfirmEnable = !1,
                                    n.isAgreeProjectTerm = !1,
                                    n.isAgreeProjectTermAll = !1
                            }
                            ,
                            n.confirmAgree = function() {
                                if (!n.personalAgree.all) {
                                    for (var e in n.personalAgree) {
                                        if (n.personalAgree[e])
                                            return n.isAgreeProjectTerm = !1,
                                                void (n.isAgreeProjectTermAll = !0)
                                    }
                                    return n.isAgreeProjectTermAll = !1,
                                        void (n.isAgreeProjectTerm = !0)
                                }
                                n.personalAgree.all && (n.projectTermConfirmEnable = !1,
                                    n.isAgreeProjectTerm = !1,
                                    n.isAgreeProjectTermAll = !1,
                                    n.toggleProjectOpen())
                            }
                            ,
                            n.togglePersonal = function(e) {
                                if ("all" == e && 0 == n.personalAgree.all)
                                    for (var t in n.personalAgree)
                                        n.personalAgree[t] = !0;
                                else if ("all" == e && 1 == n.personalAgree.all)
                                    for (var t in n.personalAgree)
                                        n.personalAgree[t] = !1;
                                if ("all" != e) {
                                    n.personalAgree[e] = !n.personalAgree[e];
                                    var r = n.personalAgree;
                                    r.open && r.use && r.edit && (n.personalAgree.all = !0)
                                }
                                1 == n.personalAgree.all && (n.personalAgree[e] || (n.personalAgree.all = !1))
                            }
                            ,
                            n.showProjectTitle = function(e) {
                                n.project.name.length > 10 && (n.projectName = !0)
                            }
                            ,
                            n.hideLectureTitle = function(e) {
                                n.projectName = !1
                            }
                            ,
                            n.projectDetail = function(e) {
                                window.location.href = "/" + e.user.username + "/" + e._id + "?returnUrl=" + encodeURIComponent(location.href)
                            }
                            ,
                            n.AgreePrTerm = function(e) {
                                n.project.isopen || (n.projectTermConfirmEnable = !0)
                            }
                            ,
                            n.toggleProjectOpen = function() {
                                n.project.isopen = !n.project.isopen,
                                    e.put("/api/project/" + n.project._id, {
                                        isopen: n.project.isopen,
                                        parent: n.project.parent
                                    }).then(function(e) {
                                        n.shareCancelPopup = !1;
                                        var t = n.$parent.$parent.projectList
                                            , r = !1;
                                        for (var a in t)
                                            e.data._id === t[a]._id && n.$parent.$parent.find && (r = !0);
                                        r && n.$parent.$parent.find(!0)
                                    }, function(e) {
                                        alert(Lang.Msgs.error_occured)
                                    })
                            }
                            ,
                            n.closeSharePopup = function() {
                                n.shareCancelPopup = !1
                            }
                        ;
                        var o = r.children().eq(0);
                        o.bind("mouseenter", function() {
                            o.addClass("enter")
                        }),
                            o.bind("mouseleave", function() {
                                o.removeClass("enter"),
                                    o.addClass("leave"),
                                    o.bind("oanimationend animationend webkitAnimationEnd", function() {
                                        o.removeClass("leave")
                                    })
                            }),
                            n.dict = {
                                BUTTONS_CANCEL: Lang.Buttons.cancel,
                                BUTTONS_SAVE: Lang.Buttons.save,
                                MENUS_PROJECT_TERM_POPUP_TITLE: Lang.Menus.project_term_popup_title,
                                MENUS_PROJECT_TERM_POPUP_DESCRIPTION_1: Lang.Menus.project_term_popup_description_1,
                                MENUS_PROJECT_TERM_POPUP_DESCRIPTION_2: Lang.Menus.project_term_popup_description_2,
                                MENUS_PROJECT_TERM_POPUP_DESCRIPTION_3: Lang.Menus.project_term_popup_description_3,
                                MENUS_PROJECT_TERM_POPUP_DESCRIPTION_4: Lang.Menus.project_term_popup_description_4,
                                MENUS_PROJECT_TERM_AGREE_1_1: Lang.Menus.project_term_agree_1_1,
                                MENUS_PROJECT_TERM_AGREE_2_1: Lang.Menus.project_term_agree_2_1,
                                MENUS_PROJECT_TERM_AGREE_2_2: Lang.Menus.project_term_agree_2_2,
                                MENUS_PROJECT_TERM_AGREE_3_1: Lang.Menus.project_term_agree_3_1,
                                MENUS_PROJECT_TERM_AGREE_3_2: Lang.Menus.project_term_agree_3_2,
                                MENUS_AGREE_ALL: Lang.Menus.agree_all,
                                MENUS_ALERT_AGREE_SHARE: Lang.Menus.alert_agree_share,
                                MENUS_ALERT_AGREE_ALL: Lang.Menus.alert_agree_all,
                                MENUS_DELETE_CONFIRM: Lang.Menus.delete_confirm,
                                MENUS_DELETE_FROM_LIST: Lang.Menus.delete_from_list,
                                MENUS_DELETE_FROM_LIST_EN: Lang.Menus.delete_from_list_en
                            }
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("projectBoxIndex", ["$http", function(e) {
                return {
                    restrict: "AE",
                    scope: {
                        project: "=project",
                        tags: "@tags"
                    },
                    replace: !0,
                    templateUrl: "/views/index/project_box_index.html",
                    link: function(t, n, r) {
                        var a = t.tags
                            , o = n.find(".projectBadgeContainer");
                        if (a && a.indexOf("best") > -1) {
                            var i = $("<img src=/img/assets/index/main_staffpick.png>");
                            o.append(i)
                        }
                        var s = (new Date).getTime();
                        t.project.thumb = t.project.thumb + "?noCache=" + s,
                            t.user = window.user,
                            t.projectDetail = function(e) {
                                window.location.href = "/" + e.user.username + "/" + e._id + "?returnUrl=" + encodeURIComponent(location.href)
                            }
                            ,
                            t.toggleProjectOpen = function() {
                                t.project.isopen = !t.project.isopen,
                                    e.put("/api/project/" + t.project._id, {
                                        isopen: t.project.isopen
                                    }).then(function(e) {}, function(e) {
                                        alert(Lang.Msgs.error_occured)
                                    })
                            }
                        ;
                        var l = n.children().eq(0);
                        l.bind("mouseenter", function() {
                            l.addClass("enter")
                        }),
                            l.bind("mouseleave", function() {
                                l.removeClass("enter"),
                                    l.addClass("leave"),
                                    l.bind("oanimationend animationend webkitAnimationEnd", function() {
                                        l.removeClass("leave")
                                    })
                            })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("entrylmsIndicator", function() {
                return {
                    restrict: "E",
                    scope: {
                        data: "=",
                        click: "="
                    },
                    link: function(e, t, n) {
                        var r = new entrylms.Render({
                            target: t
                        });
                        e.data && (r.renderData = e.data),
                        e.click && r.on("select", function(t, a) {
                            var o = (r.renderData.content || [])[a] || {};
                            0 !== a && "BASIC" === o.status && "curriculums" !== n.type || e.click(n, a, t)
                        })
                    }
                }
            }),
            angular.module("mean.common").directive("projectGroupbox", ["$http", "$cookies", "Global", function(e, t, n) {
                return {
                    restrict: "AE",
                    scope: {
                        project: "=project",
                        user: "=user",
                        favoriteGroup: "=bind",
                        currentGroup: "=group"
                    },
                    replace: !0,
                    templateUrl: "/views/arts/project_groupbox.html",
                    link: function(r, a, o) {
                        if (r.favoriteGroup) {
                            r.currentGroup = {},
                                r.currentGroup._id = r.favoriteGroup
                        }
                        r.personalAgree = {
                            open: !1,
                            use: !1,
                            edit: !1,
                            all: !1
                        },
                            r.isGroupOwner = n.isGroupOwner(r.currentGroup),
                            r.removeProjectInGroup = function(t) {
                                e.post("/api/project/group/remove", {
                                    project_id: t._id,
                                    idx: r.currentGroup._id
                                }).then(function(e) {
                                    var t = r.$parent.$parent;
                                    t.find && t.find(!0)
                                }, function(e) {
                                    alert(Lang.Msgs.error_occured)
                                })
                            }
                            ,
                            r.togglePersonal = function(e) {
                                if ("all" == e && 0 == r.personalAgree.all)
                                    for (var t in r.personalAgree)
                                        r.personalAgree[t] = !0;
                                else if ("all" == e && 1 == r.personalAgree.all)
                                    for (var t in r.personalAgree)
                                        r.personalAgree[t] = !1;
                                if ("all" != e) {
                                    r.personalAgree[e] = !r.personalAgree[e];
                                    var n = r.personalAgree;
                                    n.open && n.use && n.edit && (r.personalAgree.all = !0)
                                }
                                1 == r.personalAgree.all && (r.personalAgree[e] || (r.personalAgree.all = !1))
                            }
                            ,
                            r.confirmAgree = function(e) {
                                r.removeProjectInGroup(e),
                                    r.projectTermConfirmEnable = !1
                            }
                            ,
                            r.showDeletePopup = function(e) {
                                r.deleteProject = e.name,
                                    r.projectTermConfirmEnable = !0
                            }
                            ,
                            r.cancelAgree = function() {
                                return r.projectTermConfirmEnable = !1,
                                    !1
                            }
                            ,
                            r.AgreePrTerm = function(e) {
                                r.project.group.visible || (r.projectTermConfirmEnable = !0)
                            }
                            ,
                            r.isLang = function(e) {
                                return t.get("lang") == e
                            }
                            ,
                            r.projectDetail = function(e) {
                                if (r.favoriteGroup) {
                                    r.currentGroup = {},
                                        r.currentGroup._id = r.favoriteGroup
                                }
                                r.currentGroup ? window.location.href = "/" + e.user.username + "/" + e._id + "/" + r.currentGroup._id + "?returnUrl=" + encodeURIComponent(location.href) : window.location.href = "/" + e.user.username + "/" + e._id + "?returnUrl=" + encodeURIComponent(location.href)
                            }
                            ,
                            r.showProjectTitle = function(e) {
                                r.project.name.length > 10 && (r.projectName = !0)
                            }
                            ,
                            r.hideLectureTitle = function(e) {
                                r.projectName = !1
                            }
                            ,
                            r.toggleProjectVisible = function() {
                                r.project.group.visible = !r.project.group.visible,
                                    e.put("/api/project/" + r.project._id, {
                                        group: r.project.group
                                    }).then(function(e) {}, function(e) {
                                        alert(Lang.Msgs.error_occured)
                                    })
                            }
                        ;
                        var i = a.children().eq(0);
                        i.bind("mouseenter", function() {
                            i.addClass("enter")
                        }),
                            i.bind("mouseleave", function() {
                                i.removeClass("enter"),
                                    i.addClass("leave"),
                                    i.bind("oanimationend animationend webkitAnimationEnd", function() {
                                        i.removeClass("leave")
                                    })
                            }),
                            r.dict = {
                                MENUS_GROUP_LECTURE_DELETE: Lang.Menus.group_lecture_delete,
                                MENUS_POPUP_DELETE: Lang.Menus.popup_delete,
                                MENUS_DELETE_FROM_LIST: Lang.Menus.delete_from_list_en + Lang.Menus.delete_from_list,
                                MENUS_FROM_LIST_KO: Lang.Menus.from_list_ko,
                                MENUS_DELETE_GROUP_ART: Lang.Menus.delete_group_art,
                                BUTTONS_CANCEL: Lang.Buttons.cancel,
                                BUTTONS_SAVE: Lang.Buttons.save
                            }
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("whenScrolled", function() {
                return function(e, t, n) {
                    var r = t[0];
                    angular.element(r).bind("scroll load", function(t) {
                        r.getBoundingClientRect();
                        e.$apply(n.whenScrolled)
                    })
                }
            }),
            angular.module("mean.common").directive("entryBlock", ["$compile", function(e) {
                return {
                    restrict: "E",
                    scope: {
                        code: "=?code",
                        parserType: "=parsertype"
                    },
                    transclude: !1,
                    link: function(e, t, n) {
                        var r = n.align || "CENTER"
                            , a = document.createElement("div");
                        a.className = "entryBlockDirective",
                            t.replaceWith(a);
                        var o = new Entry.RenderView(a,r);
                        e.$watch("parserType", function() {
                            !function() {
                                var t;
                                switch (Number(e.parserType)) {
                                    case Entry.Workspace.MODE_VIMBOARD:
                                        t = Entry.Vim.PARSER_TYPE_BLOCK_TO_PY
                                }
                                if (n.type) {
                                    var r = Entry.block[n.type].def;
                                    e.code = r ? [[r]] : [[{
                                        type: n.type
                                    }]]
                                }
                                o.setParserType(t),
                                o.code && (o.code.clear(),
                                    o.code.destroyView());
                                var i = new Entry.Code(e.code);
                                o.changeCode(i),
                                    t ? o.code.getThreads()[0].view.renderText() : o.code.getThreads()[0].view.renderBlock();
                                $(a).css({
                                    height: o.height + 10
                                })
                            }()
                        })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("entryBlockPng", ["$compile", function(e) {
                return {
                    restrict: "E",
                    scope: {
                        code: "=?code",
                        object: "=?object"
                    },
                    transclude: !1,
                    link: function(e, t, n) {
                        var r = n.align || "CENTER";
                        if (n.type) {
                            var a = Entry.block[n.type].def;
                            e.code = a ? [[a]] : [[{
                                type: n.type
                            }]]
                        }
                        var o = document.createElement("div");
                        o.className = "entryBlockPrintDirective",
                            t.replaceWith(o);
                        var i = new Entry.RenderView(o,r)
                            , s = new Entry.EntryObject(e.object);
                        i.changeCode(new Entry.Code(e.code,s));
                        var l = i.code.getThreads()
                            , u = l.length
                            , c = 0;
                        l.forEach(function(e) {
                            var t = new Image;
                            o.appendChild(t);
                            e.getFirstBlock().view.getDataUrl(!0).then(function(n) {
                                e.destroy(),
                                    e = null,
                                ++c == u && (s = null,
                                    i.code.clear(),
                                    i.code = null,
                                    i.renderViewContainer.remove(),
                                    i = null),
                                    t.width = n.width,
                                    t.height = n.height,
                                    t.src = n.src
                            })
                        })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("entryBlockRawPng", ["$compile", function(e) {
                return {
                    restrict: "E",
                    scope: {
                        code: "=?code",
                        object: "=?object"
                    },
                    transclude: !1,
                    link: function(e, t, n) {
                        var r = n.align || "CENTER";
                        if (n.type) {
                            var a = Entry.block[n.type].def;
                            e.code = a ? [[a]] : [[{
                                type: n.type
                            }]]
                        }
                        var o = document.createElement("div");
                        o.className = "entryBlockPrintDirective",
                            t.replaceWith(o);
                        var i = new Entry.RenderView(o,r)
                            , s = new Entry.EntryObject(e.object);
                        i.changeCode(new Entry.Code(e.code,s));
                        var l = i.code.getThreads()
                            , u = l.length
                            , c = 0;
                        l.forEach(function(e) {
                            var t = new Image;
                            o.appendChild(t);
                            e.getFirstBlock().view.getDataUrl(!0, !0).then(function(n) {
                                e.destroy(),
                                    e = null,
                                ++c == u && (s = null,
                                    i.code.clear(),
                                    i.code = null,
                                    i.renderViewContainer.remove(),
                                    i = null);
                                var r = n.width
                                    , a = n.height;
                                (t.src = n.src,
                                r > 594) && (r = 594,
                                    a /= n.width / 594);
                                $(t).css({
                                    width: r,
                                    height: a
                                })
                            })
                        })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("input", function() {
                return {
                    restrict: "E",
                    compile: function(e) {
                        e.on("compositionstart", function(e) {
                            e.stopImmediatePropagation()
                        })
                    }
                }
            }),
            angular.module("mean.common").directive("textarea", function() {
                return {
                    restrict: "E",
                    compile: function(e) {
                        e.on("compositionstart", function(e) {
                            e.stopImmediatePropagation()
                        })
                    }
                }
            }),
            angular.module("mean.common").directive("cpartyPrompt", ["$http", "Global", "ActivityLog", "$routeParams", function(e, t, n, r) {
                return {
                    restrict: "E",
                    scope: {
                        cpartysubmited: "&"
                    },
                    templateUrl: "/views/maze/codingpartyStartPopup.html",
                    link: function(e, r, a) {
                        var o = t.getUnitedUserId();
                        function i() {
                            e.isShowLoginSignupPrompt = !e.isShowLoginSignupPrompt,
                                e.isHidePopupBG = !e.isHidePopupBG
                        }
                        e.grades = [{
                            year: "2010",
                            grade: "초등 1학년"
                        }, {
                            year: "2009",
                            grade: "초등 2학년"
                        }, {
                            year: "2008",
                            grade: "초등 3학년"
                        }, {
                            year: "2007",
                            grade: "초등 4학년"
                        }, {
                            year: "2006",
                            grade: "초등 5학년"
                        }, {
                            year: "2005",
                            grade: "초등 6학년"
                        }, {
                            year: "2004",
                            grade: "중등 1학년"
                        }, {
                            year: "2003",
                            grade: "중등 2학년"
                        }, {
                            year: "2002",
                            grade: "중등 3학년"
                        }, {
                            year: "2001",
                            grade: "고등 1학년"
                        }, {
                            year: "2000",
                            grade: "고등 2학년"
                        }, {
                            year: "1999",
                            grade: "고등 3학년"
                        }, {
                            year: "1998",
                            grade: "일반"
                        }],
                            e.cpartyUser = {},
                            e.hideLoginSignupPromptAndShowCodingpartyPrompt = function() {
                                e.isShowLoginSignupPrompt = !1,
                                    e.isShowCodingpartyInputPrompt = !0
                            }
                            ,
                            $(document).on("hidePopup", function() {
                                i()
                            }),
                            e.showLogin = function() {
                                i(),
                                    $.event.trigger({
                                        type: "showLogin"
                                    })
                            }
                            ,
                            e.showSignUp = function() {
                                i(),
                                    $.event.trigger({
                                        type: "showSignUp"
                                    })
                            }
                            ,
                            e.submitCodingpartyStart = function() {
                                e.cpartyUser.year ? e.cpartyUser.gender ? e.cpartyUser.sw ? (n.post("startParty", {
                                    gender: e.cpartyUser.gender,
                                    year: e.cpartyUser.year,
                                    key: o,
                                    swLearned: e.cpartyUser.sw,
                                    target: "codingparty"
                                }).success(function(e) {
                                    console.log("startParty result=", e)
                                }),
                                    e.isShowCodingpartyInputPrompt = !1,
                                    e.isHidePopupBG = !0,
                                    e.cpartysubmited()) : alert("소프트웨어교육 경험을 표시해주세요.") : alert(Lang.Menus.insert_gender) : alert("자신의 학년을 선택해주세요.")
                            }
                            ,
                            n.checkCodingPartyAttended(function(n) {
                                e.haveCodingpartyKey = n,
                                    e.isShowLoginSignupPrompt = !t.authenticated && !n,
                                    e.isShowLoginSignupPrompt ? e.isShowCodingpartyInputPrompt = !1 : e.isShowCodingpartyInputPrompt = !n,
                                    e.isHidePopupBG = !e.isShowLoginSignupPrompt && !e.isShowCodingpartyInputPrompt
                            })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("bottomChecker", ["$window", function(e) {
                return {
                    restrict: "A",
                    scope: !0,
                    link: function(t, n, r) {
                        var a = n[0]
                            , o = +r.bottomOffset || 0
                            , i = function() {
                            var n = e.scrollY || e.pageYOffset;
                            t.isAtBottom = !(n + e.innerHeight + o < a.scrollHeight)
                        };
                        function s() {
                            t.$apply(i)
                        }
                        angular.element(e).bind("scroll", s),
                            t.$on("$destroy", function() {
                                angular.element(window).off("scroll", s)
                            })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("paginate", function() {
                var e = function(e) {};
                return e.$inject = ["$scope"],
                    {
                        restrict: "AE",
                        scope: {
                            page: "=page",
                            pagesize: "@",
                            rows: "@",
                            total: "=total"
                        },
                        templateUrl: "/views/paginate.html",
                        link: function(e, t, n) {
                            e.$watch("[page, total]", function() {
                                !function(e) {
                                    var t = Number(e.page) || 1
                                        , n = Number(e.pagesize)
                                        , r = Number(e.rows)
                                        , a = Number(e.total)
                                        , o = Math.ceil(a / r)
                                        , i = Math.ceil(a / r)
                                        , s = Math.ceil(t / n)
                                        , l = 1 === s ? 1 : s * n - (n - 1);
                                    o > n && t > Math.round(n / 2) && i - (l = t - (Math.round(n / 2) - 1)) < n - 1 && (l = l - (n - (i - l)) + 1),
                                    i > l + (n - 1) && (i = l + (n - 1)),
                                        e.lastPage = i,
                                        e.pageList = [];
                                    for (var u = l; u <= i; u++)
                                        e.pageList.push(u);
                                    e.hasPrev = l > 1,
                                        e.pageList.length > 0 && e.pageList[0] + n <= o ? e.hasNext = !0 : e.hasNext = !1,
                                        e.gotoPage = function(t) {
                                            e.$parent.setPage(t),
                                                e.page = t,
                                                scroll(0, 0)
                                        }
                                        ,
                                        e.prevPage = function() {
                                            if (e.hasPrev) {
                                                var t = Number(e.pagesize)
                                                    , n = e.page - t;
                                                n < 1 && (n = 1),
                                                    e.$parent.setPage(n),
                                                    e.page = n,
                                                    scroll(0, 0)
                                            }
                                        }
                                        ,
                                        e.nextPage = function() {
                                            if (e.hasNext) {
                                                var t = Number(e.pagesize)
                                                    , n = Number(e.total)
                                                    , r = Number(e.rows)
                                                    , a = Math.ceil(n / r)
                                                    , o = e.page + t;
                                                o > a && (o = a),
                                                    e.$parent.setPage(o),
                                                    e.page = o,
                                                    scroll(0, 0)
                                            }
                                        }
                                }(e)
                            })
                        },
                        controller: e
                    }
            }),
            angular.module("mean.common").directive("copyClipboard", ["$window", function(e) {
                return {
                    restrict: "E",
                    template: '<div class="shortenUrl"><img src="/img/assets/art/link.png"/><input ng-model="shortenUrl" id="shortenUrl" class="selectDisable" data-clipboard-target="#shortenUrl" readonly/></div>',
                    scope: {
                        shortenUrl: "=ngModel"
                    },
                    link: function() {
                        var e = new Clipboard("#shortenUrl",{
                            target: function(e) {
                                return e.previousElementSibling
                            }
                        });
                        e.on("success", function(e) {
                            var t = document.createElement("input");
                            t.value = e.trigger.value,
                                document.body.appendChild(t),
                                t.focus(),
                                t.setSelectionRange(0, t.value.length),
                                document.execCommand("copy"),
                                document.body.removeChild(t),
                                entrylms.alert(Lang.Menus.aftercopy)
                        }),
                            e.on("error", function(e) {
                                e.clearSelection(),
                                    prompt(Lang.Menus.copy_text, e.text)
                            })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("levelStars", ["$compile", function(e) {
                return {
                    restrict: "A",
                    link: function(e, t, n) {
                        for (var r = Number(n.full || 3), a = Math.min(Number(void 0 !== n.level ? n.level : r), r), o = 0; o < r; o++)
                            t.append(o < a ? $('<img class="level_star full" src="/img/assets/study/index/level_star_full.png" />') : $('<img class="level_star empty" src="/img/assets/study/index/level_star_empty.png" />'))
                    }
                }
            }
            ]),
            angular.module("mean.common").factory("util", [function() {
                return {
                    isValidEmail: function(e) {
                        if (!e || "" == e.trim())
                            return !1;
                        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("avatar", ["config", function(e) {
                var t = (new Date).getTime();
                return {
                    restrict: "E",
                    scope: {
                        user: "="
                    },
                    link: function(n, r, a) {
                        var o = document.createElement("img");
                        r.replaceWith(o),
                            o.onerror = function() {
                                o.src = u(!0)
                            }
                        ;
                        var i = $(o)
                            , s = a.class;
                        s && i.addClass(s);
                        var l = a.id;
                        function u(r) {
                            var o = n.user;
                            if (o) {
                                if (o.avatarImage && !r) {
                                    var i = o._id;
                                    return e.webroot + "profile/" + i.substring(0, 2) + "/" + i.substring(2, 4) + "/avatar_" + i + ".png?" + (a.timestamp || t)
                                }
                                return "/img/assets/mypage/basic_avatar_" + ("male" === o.sex ? "m.png" : "w.png")
                            }
                        }
                        l && i.attr("id", l),
                            n.$watch("user", function() {
                                n.user && (o.src = u())
                            })
                    }
                }
            }
            ]),
            angular.module("mean.common").directive("ldButton", function() {
                return {
                    restrict: "E",
                    transclude: !0,
                    template: function(e, t) {
                        var n = {};
                        try {
                            n = t.option ? JSON.parse(t.option) : {}
                        } catch (e) {}
                        console.log(n, e, t);
                        for (var r = n.count || 4, a = "", o = 0; o < r; o++)
                            a += '<span class="ld-box"></span>';
                        return '<div ng-transclude class="ld-button-text"></div><div class="ld-button-anim">' + a + "</div>"
                    }
                }
            }),
            angular.module("mean.common").directive("ngClickOnce", ["$timeout", function(e) {
                var t = 2e3;
                return {
                    restrict: "A",
                    priority: -1,
                    link: function(n, r) {
                        var a = !1;
                        function o(n) {
                            a ? (n.preventDefault(),
                                n.stopImmediatePropagation()) : (a = !0,
                                e(function() {
                                    a = !1
                                }, t, !1))
                        }
                        n.$on("$destroy", function() {
                            r.off("click", o)
                        }),
                            r.on("click", o)
                    }
                }
            }
            ])
    },
    1020: function(e, t) {
        var n = angular.module("mean.common");
        n.filter("makeThumbnail", ["config", function(e) {
            return function(t) {
                return t && t.filename ? e.webroot + t.filename.substring(0, 2) + "/" + t.filename.substring(2, 4) + "/thumb/" + t.filename + ".png" : t && t.fileurl ? t.fileurl : "/img/assets/text_icon.png"
            }
        }
        ]),
            n.filter("projectThumbnail", ["config", function(e) {
                return function(e) {
                    if (e)
                        return "/uploads/thumb/" + e.substring(0, 4) + "/" + e + ".png"
                }
            }
            ]),
            n.filter("makePicture", ["config", function(e) {
                return function(t) {
                    return e.webroot + t.filename.substring(0, 2) + "/" + t.filename.substring(2, 4) + "/image/" + t.filename + ".png"
                }
            }
            ]),
            n.filter("thumbnailOfSprite", ["config", function(e) {
                return function(t) {
                    var n = void 0;
                    return t && t.pictures && (n = t.pictures[0]),
                        n ? e.webroot + n.filename.substring(0, 2) + "/" + n.filename.substring(2, 4) + "/thumb/" + n.filename + ".png" : ""
                }
            }
            ]),
            n.filter("avatarImage", ["config", function(e) {
                var t = (new Date).getTime();
                return function(n, r) {
                    if (n && n.avatarImage) {
                        var a = n._id
                            , o = r || t || "";
                        return e.webroot + "profile/" + a.substring(0, 2) + "/" + a.substring(2, 4) + "/avatar_" + a + ".png? " + o
                    }
                    if (n)
                        return "/img/assets/mypage/" + ("male" === n.sex ? "basic_avatar_m.png" : "basic_avatar_w.png")
                }
            }
            ]),
            n.filter("blogImage", ["config", function(e) {
                var t = (new Date).getTime();
                return function(n, r) {
                    if (n && n.blogImage) {
                        var a = n._id
                            , o = r || t || "";
                        return e.webroot + "profile/" + a.substring(0, 2) + "/" + a.substring(2, 4) + "/blog_" + a + ".png?" + o
                    }
                    return "/img/assets/arts/blog_basic_1.png"
                }
            }
            ]),
            n.filter("makeSound", ["config", function(e) {
                return function(t) {
                    return e.webroot + t.filename.substring(0, 2) + "/" + t.filename.substring(2, 4) + "/" + t.filename + t.ext
                }
            }
            ]),
            n.filter("makeDateFormat", ["config", function(e) {
                return function(e) {
                    var t = new Date(e);
                    return t.getFullYear() + "년 " + Number(t.getMonth() + 1) + "월 " + t.getDate() + "일"
                }
            }
            ]),
            n.filter("makeDateFormatDot", ["config", function(e) {
                return function(e) {
                    var t = new Date(e);
                    return t.getFullYear() + ". " + Number(t.getMonth() + 1) + ". " + t.getDate()
                }
            }
            ]),
            n.filter("makeDateFormatSimple", ["config", function(e) {
                return function(e) {
                    var t = new Date(e)
                        , n = t.getMonth() > 8 ? "" : "0"
                        , r = t.getDate() > 9 ? "" : "0";
                    return String(t.getFullYear()).substr(2, 2) + "." + n + Number(t.getMonth() + 1) + "." + r + t.getDate()
                }
            }
            ]),
            n.filter("makeDateTimeFormatIntl", ["config", function(e) {
                return function(e) {
                    var t = new Date(e);
                    return window.lang && "en" == window.lang ? t.getFullYear() + ". " + Number(t.getMonth() + 1) + ". " + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() : t.getFullYear() + " " + Lang.Menus.year + " " + Number(t.getMonth() + 1) + " " + Lang.Menus.currnet_month_time + " " + t.getDate() + " " + Lang.Menus.current_day_time + " " + t.getHours() + ":" + t.getMinutes()
                }
            }
            ]),
            n.filter("makeDateTimeFormat", ["config", function(e) {
                return function(e) {
                    var t = new Date(e);
                    return window.lang && "en" == window.lang ? t.getFullYear() + "." + Number(t.getMonth() + 1) + "." + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() : t.getFullYear() + " " + Lang.Menus.year + " " + Number(t.getMonth() + 1) + " " + Lang.Menus.currnet_month_time + " " + t.getDate() + " " + Lang.Menus.current_day_time + " " + t.getHours() + ":" + t.getMinutes()
                }
            }
            ]),
            n.filter("makeDateTimeFormatDot", ["config", function(e) {
                return function(e) {
                    var t = new Date(e);
                    return t.getFullYear() + ". " + Number(t.getMonth() + 1) + ". " + t.getDate() + " " + t.getHours() + ":" + t.getMinutes()
                }
            }
            ]),
            n.filter("tagFomat", ["config", function(e) {
                return function(e) {
                    for (var t = "", n = 0; n < e.length && (t += e[n].name,
                    n != e.length - 1); n++)
                        t += ", ";
                    return t
                }
            }
            ]),
            n.filter("dateFormatForDs", ["config", function(e) {
                return function(e) {
                    function t(e, t, n) {
                        var r = n - t;
                        return Math.floor(r / {
                            y: 31536e6,
                            w: 6048e5,
                            d: 864e5,
                            h: 36e5,
                            n: 6e4,
                            s: 1e3
                        }[e])
                    }
                    var n = t("y", (e = new Date(e)).getTime(), (new Date).getTime())
                        , r = t("d", e.getTime(), (new Date).getTime())
                        , a = t("h", e.getTime(), (new Date).getTime())
                        , o = t("n", e.getTime(), (new Date).getTime());
                    return n > 0 ? e.getFullYear() + "년 " + Number(e.getMonth() + 1) + "월 " + e.getDate() + "일" : n <= 0 && r > 0 ? Number(e.getMonth() + 1) + "월 " + e.getDate() + "일" : a > 0 && r <= 0 ? a + "시간 " + Math.floor(o % 60) + "분 전" : o > 0 && a <= 0 ? o + "분 전" : "방금"
                }
            }
            ]),
            n.filter("text", ["config", function(e) {
                return function(e) {
                    var t = e.split(".");
                    if (t.length > 1) {
                        var n = t[0]
                            , r = t[1];
                        return "Blocks" == n ? Lang.Blocks[r] : "Menus" == n ? Lang.Menus[r] : "Users" == n ? Lang.Users[r] : "Msgs" == n ? Lang.Msgs[r] : "Buttons" == n ? Lang.Buttons[r] : "Workspace" == n ? Lang.Workspace[r] : "Category" == n ? Lang.Category[r] : "unknown"
                    }
                    return Lang[e]
                }
            }
            ]),
            n.filter("makeRange", function() {
                return function(e) {
                    var t, n;
                    switch (e.length) {
                        case 1:
                            t = 0,
                                n = parseInt(e[0]) - 1;
                            break;
                        case 2:
                        case 3:
                            t = parseInt(e[0]),
                                n = parseInt(e[1]);
                            break;
                        default:
                            return e
                    }
                    var r = [];
                    if (3 === e.length)
                        for (var a = t; a <= n; a++)
                            r.push(a);
                    else
                        for (a = n; a >= t; a--)
                            r.push(a);
                    return r
                }
            }),
            n.filter("removeBr", function() {
                return function(e) {
                    return e.replace(/<br\s*[\/]?>/gi, "\n")
                }
            }),
            n.filter("translateText", function() {
                return function(e) {
                    return Lang.EntryStatic[e] || e
                }
            }),
            n.filter("searchProject", function() {
                return function(e) {
                    return Lang.Menus[e]
                }
            }),
            n.filter("description", function() {
                return function(e) {
                    return e || "등록된 글이 없습니다."
                }
            }),
            n.filter("limitFrom", function() {
                return function(e, t, n) {
                    return n || (n = 0),
                        e.slice(n, n + t)
                }
            }),
            n.filter("makeGrades", function() {
                return function(e) {
                    if (!e || 0 == e.length)
                        return "없음";
                    e.sort();
                    for (var t = "초등", n = 0, r = "중등", a = 0, o = "", i = new RegExp("e_"), s = new RegExp("m_"), l = 0, u = e.length; l < u; l++) {
                        var c = e[l];
                        if (i.test(c))
                            t += " " + c.substring(c.length - 1, c.length) + ",",
                                n++;
                        else if (s.test(c)) {
                            r += " " + c.substring(c.length - 1, c.length) + ",",
                                a++
                        } else
                            o += "일반",
                                0
                    }
                    var m = (t = 0 != n ? t.substr(0, t.length - 1) + "학년 /" : "") + (r = 0 != a ? r.substr(0, r.length - 1) + "학년 /" : "") + o;
                    return m.lastIndexOf("/") == m.length - 1 ? m.substring(0, m.length - 1) : m
                }
            }),
            n.filter("unsafe", ["$sce", function(e) {
                return function(t) {
                    return t ? e.trustAsHtml(t.replace(new RegExp("\r?\n","g"), "<br/>")) : ""
                }
            }
            ]),
            n.filter("safeUrl", ["$sce", function(e) {
                return function(t) {
                    return t ? e.trustAsUrl(t) : ""
                }
            }
            ]),
            n.filter("addTimeStamp", [function() {
                return function(e) {
                    return e + "?" + String((new Date).getTime()).substr(length - 5, 5)
                }
            }
            ]),
            n.filter("mazeFinalStep", [function() {
                return function(e, t) {
                    return e == t ? Lang.Menus.go_further : e
                }
            }
            ]),
            n.filter("kilo", [function() {
                return function(e) {
                    return void 0 == e && (e = 0),
                        e > 1e3 ? Math.floor(e / 1e3).toFixed(0) + "K" : e
                }
            }
            ]),
            n.filter("textBr", ["$sce", function(e) {
                return function(e) {
                    if (!e)
                        return "";
                    var t = e.split(".");
                    if (t.length > 1) {
                        var n = t[0]
                            , r = t[1];
                        return ("Blocks" == n ? Lang.Blocks[r] : "Menus" == n ? Lang.Menus[r] : "Users" == n ? Lang.Users[r] : "Msgs" == n ? Lang.Msgs[r] : "Buttons" == n ? Lang.Buttons[r] : "Workspace" == n ? Lang.Workspace[r] : "Category" == n ? Lang.Category[r] : "unknown").replace(new RegExp("\r?\n","g"), "<br/>")
                    }
                }
            }
            ]),
            n.filter("nameFilter", function() {
                return function(e) {
                    var t = navigator.language ? navigator.language : "ko";
                    return -1 != t.indexOf("-") && (t = t.split("-").shift()),
                    window.lang && (t = window.lang),
                    window.user && window.user.language && (t = window.user.language),
                    "ko" != t && "en" != t && (t = "en"),
                        e.label && e.label[t] ? e.label[t] : e.name
                }
            }),
            n.filter("nameTranslate", function() {
                return function(e, t) {
                    var n = SpriteNames;
                    "picture" == t ? n = PictureNames : "sound" == t && (n = SoundNames);
                    var r = navigator.language ? navigator.language : "ko";
                    return window.lang && (r = window.lang),
                    window.user && window.user.language && (r = window.user.language),
                        !n || r && -1 != r.indexOf("ko") ? e : n[e] ? n[e] : e
                }
            }),
            n.filter("gradeTranslate", function() {
                return function(e) {
                    e.sort();
                    var t = new RegExp(",","g")
                        , n = ""
                        , r = String(e).replace(t, "")
                        , a = r.split("e_")
                        , o = r.split("m_")
                        , i = r.split("general")
                        , s = a.length
                        , l = o.length;
                    return s > 2 ? n += ", " + Lang.Menus.elementary_short + a[1] + "~" + a[s - 1][0] : 2 == s && (n += ", " + Lang.Menus.elementary_short + a[s - 1][0]),
                        l > 2 ? n += ", " + Lang.Menus.middle_short + "~" + o[l - 1][0] : 2 == l && (n += ", " + Lang.Menus.middle_short + o[l - 1][0]),
                    i.length > 1 && (n += ", " + Lang.EntryStatic.general),
                        n = n.replace(",", "")
                }
            }),
            n.filter("undefinedText", function() {
                return function(e) {
                    return e && "undefined" != e ? e : ""
                }
            }),
            n.filter("formatGrades", function() {
                return function(e) {
                    if (!e || 0 == e.length)
                        return "";
                    if (1 == e.length)
                        return Lang.EntryStatic[e[0]];
                    for (var t = e.sort(function(e, t) {
                        return EntryStatic.lectureGrades.indexOf(e) > EntryStatic.lectureGrades.indexOf(t)
                    }), n = [], r = 0, a = null, o = null, i = 0, s = t.length; i < s; i++) {
                        var l = t[i]
                            , u = null;
                        i < t.length - 1 && (u = t[i + 1]);
                        var c = EntryStatic.lectureGrades.indexOf(l);
                        EntryStatic.lectureGrades.indexOf(u) - c == 1 ? (n[r] ? n[r] = Lang.EntryStatic[a] + " ~ " + Lang.EntryStatic[u] : (n.push(Lang.EntryStatic[l] + " ~ " + Lang.EntryStatic[u]),
                            a = l),
                            o = u) : null != u ? (r += 1,
                            l == o ? (a = u,
                                o = u) : (a = l,
                                o = l),
                            n[r] ? n[r] = Lang.EntryStatic[a] : n.push(Lang.EntryStatic[a])) : null == u && o != l && n.push(Lang.EntryStatic[l])
                    }
                    return n.join(", ")
                }
            })
    },
    1022: function(e, t, n) {
        "use strict";
        angular.module("mean.common").factory("ActivityLog", ["$http", "Global", function(e, t) {
            return {
                send: function(e) {
                    if ("editStage" !== e.type) {
                        var n = {
                            type: e.type,
                            key: t.getUnitedUserId(),
                            stageId: e.stageName + "-" + e.stageNumber
                        };
                        "startStage" == e.type && 1 === e.stageNumber ? n.needStatistic = !0 : "finishStage" == e.type && e.isFinalStage && (n.needStatistic = !0);
                        var r = Entry.activityReporter.get();
                        r && r.length > 0 && (n.actions = r),
                        "finishStage" == e.type && (n.isBookmarkStage = e.isBookmarkStage),
                            n.savedBlock = e.savedBlock,
                            this.post(n),
                            Entry.activityReporter.clear()
                    }
                },
                post: function(t, n) {
                    return t && !n ? n = t : n.type = t,
                        n && "startParty" === n.type ? sessionStorage.setItem("cpartyAttendStatus", "ATTENDED") : n && "reportEvent" === n.type && sessionStorage.setItem("cpartyEventStatus", "ATTENDED"),
                        e.post("/log/activity", n)
                },
                getStageStatus: function(n, r) {
                    var a = "/log/codingparty/stageStatus/" + n + "/" + t.getUnitedUserId();
                    if ("TIMEOUT" === sessionStorage.getItem("cpartyAttendStatus"))
                        return r({
                            status: {
                                survey: !0
                            }
                        });
                    e.get(a).success(function(e) {
                        r(e)
                    }).error(function(e) {
                        console.log("getStageStatus err=", e),
                            r(null)
                    })
                },
                haveCodingpartyAttended: function(e) {
                    var t = sessionStorage.getItem("cpartyAttendStatus");
                    return "ATTENDED" === t || "TIMEOUT" === t
                },
                checkCodingPartyAttended: function(n) {
                    var r = "/log/codingparty/checkAttended/" + t.getUnitedUserId();
                    if (this.haveCodingpartyAttended())
                        return n(!0);
                    e.get(r).success(function(e) {
                        console.log("@attend result=", e);
                        var t = e && e.haveAttended
                            , r = t ? "ATTENDED" : "NOT_ATTENDED";
                        sessionStorage.setItem("cpartyAttendStatus", r),
                            n(t)
                    }).error(function(e) {
                        sessionStorage.setItem("cpartyAttendStatus", "TIMEOUT"),
                            n(!0),
                            console.log("checkCodingPartyAttended err=", e, "TIMEOUT")
                    })
                },
                haveEventAttended: function(e) {
                    var t = sessionStorage.getItem("cpartyEventStatus");
                    return "ATTENDED" === t || "TIMEOUT" === t
                },
                checkEventAttended: function(n) {
                    var r = "/log/codingparty/checkEvent/" + t.getUnitedUserId();
                    if (this.haveEventAttended())
                        return n(!0);
                    e.get(r).success(function(e) {
                        var t = e && e.haveAttended
                            , r = t ? "ATTENDED" : "NOT_ATTENDED";
                        sessionStorage.setItem("cpartyEventStatus", r),
                            n(t)
                    }).error(function(e) {
                        sessionStorage.setItem("cpartyEventStatus", "TIMEOUT"),
                            n(!0)
                    })
                },
                incrementUserTryCount: function(t) {
                    return e.put("/log/codingpartyCount", {
                        stageId: t
                    })
                },
                saveCertification: function(n, r, a) {
                    var o = t.getUnitedUserId();
                    return e.put("/log/savecert", {
                        key: o,
                        stageName: n,
                        name: r
                    }).success(function(e) {
                        a && a(void 0, e)
                    }).error(function(e) {
                        a && a(e)
                    })
                }
            }
        }
        ])
    },
    1023: function(e, t, n) {
        "use strict";
        angular.module("mean.common").factory("Browser", [function() {
            return this.methods = {
                isMobile: function() {
                    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os )?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip )|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/ )|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/ )|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w] )|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
                }
            },
                this.methods
        }
        ])
    },
    1024: function(e, t, n) {
        "use strict";
        angular.module("mean.common").factory("CpartyUser", ["$http", "Global", function(e, t) {
            window.cpartyuserkey = t.getUnitedUserId();
            var n, r = t.getSessionId("localId", localStorage);
            function a(e) {
                e && console.log("errorStack=", e.stack)
            }
            t.authenticated && sessionStorage.removeItem("userStageClearStatus");
            return {
                setLastStage: function(e, t) {
                    t = +t;
                    var r = n.lastStages;
                    r[e] = r[e] || 0,
                    r[e] < t && (r[e] = t,
                        this.updateCpartyUser(r))
                },
                getLastStage: function(e) {
                    return n && n.lastStages[e] || 0
                },
                loadCpartyUser: function(o) {
                    if (t.authenticated) {
                        if (n)
                            return o(n);
                        e.get("/api/getcparty").success(function(t) {
                            if (t)
                                return o(n = t);
                            var r = {
                                lastStages: {
                                    "2017-1": 0
                                }
                            };
                            e.post("/api/setcparty", {
                                data: r
                            }).success(function(e) {
                                return o(n = e)
                            }).error(a)
                        }).error(a)
                    } else {
                        n = n || {
                            lastStages: {
                                "2017-1": 0
                            }
                        };
                        var i = function(e, t) {
                            if (!e)
                                return null;
                            t = t || "KEY";
                            var n = JSON.parse(atob(e));
                            return n ? n[t] : void 0
                        }(sessionStorage.getItem("userStageClearStatus"), r);
                        i && (n.lastStages = i),
                            o(n)
                    }
                },
                updateCpartyUser: function(o) {
                    if (t.authenticated) {
                        var i = {
                            data: o || n
                        };
                        e.put("/api/setcparty", i).success(function(e) {}).error(a)
                    } else
                        sessionStorage.setItem("userStageClearStatus", ((s = {})[r || "KEY"] = o,
                            btoa(JSON.stringify(s))));
                    var s
                },
                incUnlockCount: function() {},
                incStageClearCount: function(e, t) {}
            }
        }
        ])
    },
    1026: function(module, exports, __webpack_require__) {
        "use strict";
        angular.module("mean.common").factory("Global", ["$cookies", "$http", function($cookies, $http) {
            var _this = this, _id;
            return _this._data = {
                user: window.user,
                isLang: function(e) {
                    return ($cookies.get("lang") || "ko") === e
                },
                isTeacher: function() {
                    if (_this._data.user && !_.isEmpty(_this._data.user)) {
                        var e = _this._data.user.role;
                        return "member" !== e && "student" !== e
                    }
                },
                isMember: function() {
                    if (_this._data.user)
                        return "member" === _this._data.user.role
                },
                isStudent: function() {
                    if (_this._data.user)
                        return "student" === _this._data.user.role
                },
                isAdmin: function() {
                    if (_this._data.user)
                        return "admin" === _this._data.user.role
                },
                isGroupOwner: function(e) {
                    if (_this._data.user) {
                        var t = _this._data.user;
                        _this._data.user.role;
                        return !(!e || e.teacher !== t._id)
                    }
                },
                guid: function() {
                    function e() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return "SESS" + Math.floor((new Date).getTime() / 1e3).toString(16) + e() + e() + e()
                },
                getSessionId: function(e, t) {
                    e = e || "userLocalSessionId";
                    var n = (t = t || sessionStorage).getItem(e);
                    return n || (n = this.guid(),
                        t.setItem(e, n),
                        sessionStorage.removeItem("cpartyAttendStatus")),
                        n
                },
                getUnitedUserId: function(e, t) {
                    var n = window.user && window.user._id;
                    return n = n || this.getSessionId()
                },
                resetCpartySession: function() {
                    sessionStorage.removeItem("cpartyAttendStatus"),
                        sessionStorage.removeItem("userLocalSessionId"),
                        sessionStorage.removeItem("checkRevoke")
                },
                resetUserWorkspace: function() {
                    for (var e = 0; e < sessionStorage.length; e++) {
                        var t = sessionStorage.key(e);
                        (t.startsWith("le_") || t.startsWith("cs_")) && sessionStorage.removeItem(t)
                    }
                },
                isBadUser: !1,
                setBadUser: function(e) {
                    _this._data.isBadUser ? (entrylms.alert(Lang.Menus.fword_alert_2),
                        _this._data.isBadUser = !1,
                    e && e()) : (entrylms.alert(Lang.Menus.fword_alert_1),
                        _this._data.isBadUser = !0)
                },
                getCheckRevoke: function() {
                    return sessionStorage.getItem("checkRevoke")
                },
                setCheckRevoke: function(e, t) {
                    sessionStorage.setItem("checkRevoke", e),
                    t && t()
                },
                getRandomReplaceWord: function() {
                    return eval("Lang.Menus.fword_replace_" + Math.ceil(6 * Math.random()))
                },
                isLectureStaticThumb: function(e) {
                    if (e && e.studies) {
                        var t = ["quiz", "maze", "maze_static"]
                            , n = !0;
                        if (e)
                            e.studies.some(function(e) {
                                var r = e.type || e.studyType;
                                t.includes(r) || (n = !1)
                            });
                        return n
                    }
                },
                staticLectureThumbnail: function(e, t) {
                    if (e) {
                        var n, r = e.repStudy.type || e.repStudy.studyType, a = "/img/assets/study/lecture/thumb_" + t;
                        if ("quiz" === r && (n = a + "/quiz.png"),
                            "maze" === r || "maze_static" === r)
                            n = (a += "/maze_") + (e.repStudy.contents.mode + ".png");
                        return {
                            "background-image": "url('" + n + "')"
                        }
                    }
                },
                makeShortenURL: function(e, t) {
                    $http.post("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBK2A6eb7PH85XQYCbsQIRjeRttsIOS5Ik", {
                        longUrl: e
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }).then(function(n) {
                        n && n.data && n.data.id ? t(n.data.id) : t(e)
                    }, function(n) {
                        t(e)
                    })
                },
                authenticated: !(!window.user || !window.user._id),
                getUserId: function() {
                    if (_id)
                        return _id;
                    var e = this.user && this.user._id;
                    return _id = e
                },
                isNullOrEmpty: function(e) {
                    if (!e)
                        return !0;
                    if (0 == (e = e.trim()).length)
                        return !0;
                    var t = e.charCodeAt(0).toString(16);
                    return "115f" == t || "00ad" == t || "202e" == t || "1160" == t
                },
                formatNumber: function(e) {
                    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                },
                safeFilename: function(e) {
                    return window.btoa(encodeURIComponent(e))
                }
            },
                _this._data
        }
        ])
    },
    1029: function(e, t, n) {
        "use strict";
        angular.module("mean.common").factory("Users", ["$resource", "$http", function(e, t) {
            return {
                update: function(e) {
                    return t.put("/api/users/" + e)
                }
            }
        }
        ])
    },
    1070: function(e, t, n) {
        n(955),
            n(953),
            n(956),
            n(1019),
            n(1020),
            n(979),
            n(986),
            n(974),
            n(1026),
            n(1023),
            n(1029),
            n(954),
            n(1022),
            n(1024)
    },
    953: function(e, t, n) {
        "use strict";
        angular.module("mean.common", ["ngCookies", "ngResource", "ngRoute", "ui.bootstrap", "LocalStorageModule", "ngCookies", "ngTouch"]),
            angular.module("mean.tutorial", ["mean.common"]),
            angular.module("mean.study", ["ui.sortable", "mean.common"]),
            angular.module("mean.maze", ["mean.common"]),
            angular.module("mean.mission", ["mean.common", "mean.maze"]),
            angular.module("mean.entry", ["ui.sortable", "mean.common"]),
            angular.module("mean.workspace", ["mean.entry"]),
            angular.module("mean.lecture", ["mean.entry"]),
            angular.module("mean.course", ["mean.entry"]),
            angular.module("mean.ebs", ["mean.entry"]),
            angular.module("mean.admin", ["mean.common"]),
            angular.module("mean.arts", ["mean.common"]),
            angular.module("mean.arts.list", ["mean.common", "mean.arts"]),
            angular.module("mean.arts.individualView", ["mean.common", "mean.arts"]),
            angular.module("mean.arts.groupView", ["mean.common", "mean.arts"]),
            angular.module("mean.arts.all", ["mean.common", "mean.arts"]),
            angular.module("mean.discuss", ["mean.common"]),
            angular.module("mean.index", ["mean.common"]),
            angular.module("mean.week.index", ["mean.common"]),
            angular.module("mean.week.maze", ["mean.common"]),
            angular.module("mean.week.ai", ["mean.common"]),
            angular.module("mean.ebs2015", ["mean.study"]),
            angular.module("mean.week.cfest", ["mean.common"]),
            angular.module("mean.week.codingparty", ["mean.common"]),
            angular.module("mean.week.codingpartyRangers", ["mean.common", "mean.maze"]),
            angular.module("mean.week.codingpartyChoseok", ["mean.common", "mean.maze"]),
            angular.module("mean.week.codingpartyMaple", ["mean.common", "mean.maze"]),
            angular.module("mean.analyze", ["mean.common"]),
            angular.module("mean.jr", ["mean.common"]),
            angular.module("mean.util", ["mean.common"]),
            angular.module("mean.study.maze", ["mean.study"]),
            angular.module("mean.week.codingparty_2016", ["mean.common"]),
            angular.module("mean.partner", ["mean.common"])
    },
    954: function(e, t, n) {
        "use strict";
        angular.module("mean.common").controller("AccessTermController", ["$scope", "Global", "$http", "$location", "$cookies", "Users", "$sce", function(e, t, n, r, a, o, i) {
            e.accessTerm = {
                accessTerm: !1
            },
                e.terms = !1,
                e.terms2 = !1,
                e.isLang = t.isLang,
                e.init = function() {
                    window.user && !/\B(\/up\/)/.test(window.location.pathname) && (e.user = window.user,
                        "student" != e.user.role || e.user.studentTerm ? (e.toggleShow = !1,
                            e.studentToggle = !1) : (e.checkAccessTerm(e.user.username, e.user.role),
                            e.studentToggle = !0,
                            e.toggleShow = !1))
                }
                ,
                e.checkBoxAccessTerm = function(t) {
                    e.accessTerm[t] = !e.accessTerm[t]
                }
                ,
                e.isLoginVisible = !1;
            e.checkAccessTerm = function(t, r) {
                e.username = t,
                    n.get("/api/user/studentTerm/" + t).success(function(e) {
                        if (e.studentTerm)
                            window.location.reload();
                        else {
                            var t = $("#loginUpdateUserTerm");
                            $("body").eq(0).css("overflow", "hidden"),
                                t.css("display", "block"),
                                t.css("top", $(document).scrollTop() + "px"),
                                n = $(window).height(),
                                r = $(".updateUserWrapper").eq(0),
                                n < 462 ? (r.css("top", 0),
                                    r.css("margin-top", 15),
                                    r.css("margin-bottom", 15),
                                    $("#loginUpdateUserTerm").scrollTop(0)) : (r.css("top", "30%"),
                                    r.css("margin-bottom", 0),
                                    r.css("margin-top", -216))
                        }
                        var n, r
                    })
            }
                ,
                e.renderHtml = function(e) {
                    return i.trustAsHtml(Lang.Menus.access_term_title)
                }
                ,
                e.reverseTerms = function() {
                    e.terms = !e.terms
                }
                ,
                e.reverseTerms2 = function() {
                    e.terms2 = !e.terms2
                }
                ,
                e.updateStudentAccessTerm = function() {
                    if (e.terms)
                        if (e.terms2) {
                            e.user.sex || (e.user.sex = "male");
                            var t = {
                                studentTerm: !0,
                                sex: e.user.sex
                            };
                            n.post("/api/users/update", t).success(function(e) {
                                entrylms.alert(Lang.Menus.doChangePassword, Lang.Menus.popup_notice).on("hide", function() {
                                    window.location.href = "/#!/personal",
                                        window.location.reload()
                                })
                            }).error(function(e, t) {})
                        } else
                            entrylms.alert(Lang.Menus.agree_personal_information, Lang.Menus.popup_notice);
                    else
                        entrylms.alert(Lang.Menus.agree_class_policy, Lang.Menus.popup_notice)
                }
                ,
                e.langType = function(e) {
                    return Lang.type == e
                }
        }
        ])
    },
    955: function(e, t, n) {
        "use strict";
        "undefined" == typeof console && (window.console = {
            log: function() {},
            error: function() {},
            warn: function() {}
        })
    },
    956: function(e, t, n) {
        "use strict";
        angular.module("mean.index").config(["$routeProvider", function(e) {
            e.when("/", {
                templateUrl: "views/index/index.html"
            }).when("/personal", {
                templateUrl: "views/index/personal.html"
            }).when("/offlineEditor", {
                templateUrl: "views/index/offline_editor.html",
                reloadOnSearch: !1
            }).when("/findPassword", {
                templateUrl: "views/index/findPassword.html"
            }).when("/about", {
                templateUrl: "views/index/about_entry.html"
            }).when("/about/consultant", {
                templateUrl: "views/index/consultant.html"
            }).when("/about/unplugged", {
                templateUrl: "views/index/unplugged.html"
            }).when("/about/unplugged/:type", {
                templateUrl: "views/index/unplugged_details.html"
            }).when("/faq", {
                templateUrl: "views/index/faq.html",
                reloadOnSearch: !1
            }).when("/terms/latest", {
                templateUrl: "views/index/terms/latest_ko.html"
            }).when("/terms/latest/en", {
                templateUrl: "views/index/terms/latest_en.html"
            }).when("/terms/20160318", {
                templateUrl: "views/index/terms/20160318_ko.html"
            }).when("/terms/20160318/en", {
                templateUrl: "views/index/terms/20160318_en.html"
            }).when("/terms/20140415", {
                templateUrl: "views/index/terms/20140415_ko.html"
            }).when("/terms/20140415/en", {
                templateUrl: "views/index/terms/20140415_en.html"
            }).when("/terms/20151120", {
                templateUrl: "views/index/terms/20151120_ko.html"
            }).when("/terms/20151120/en", {
                templateUrl: "views/index/terms/20151120_en.html"
            }).when("/terms/group", {
                templateUrl: "views/index/terms/group_ko.html"
            }).when("/terms/group/en", {
                templateUrl: "views/index/terms/group_en.html"
            }).when("/terms/project", {
                templateUrl: "views/index/terms/project_ko.html"
            }).when("/terms/project/ko", {
                templateUrl: "views/index/terms/project_ko.html"
            }).when("/terms/project/en", {
                templateUrl: "views/index/terms/project_en.html"
            }).when("/terms/license", {
                templateUrl: "views/index/terms/license_ko.html"
            }).when("/terms/license/ko", {
                templateUrl: "views/index/terms/license_ko.html"
            }).when("/terms/license/en", {
                templateUrl: "views/index/terms/license_en.html"
            }).when("/terms/privacy", {
                templateUrl: "views/index/terms/privacy_ko.html"
            }).when("/terms/privacy/en", {
                templateUrl: "views/index/terms/privacy_en.html"
            }).when("/terms/law", {
                templateUrl: "views/index/terms/law_ko.html"
            }).when("/terms/law/en", {
                templateUrl: "views/index/terms/law_en.html"
            }).otherwise({
                redirectTo: "/"
            })
        }
        ]),
            angular.module("mean.tutorial").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/tutorial/view.html"
                }).when("/:tutorialId", {
                    templateUrl: "/views/tutorial/view.html"
                }).when("/list", {
                    templateUrl: "/views/tutorial/list.html"
                }).when("/create", {
                    templateUrl: "/views/tutorial/create.html"
                }).when("/edit/:tutorialId", {
                    templateUrl: "/views/tutorial/edit.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.study").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/study/index.html"
                }).when("/basic/solve", {
                    templateUrl: "/views/study/basic/solve.html"
                }).when("/basic/materials", {
                    templateUrl: "/views/study/basic/materials.html"
                }).when("/advance/software2", {
                    templateUrl: "/views/study/advance/software2.html"
                }).when("/advance/ebsSoftware", {
                    templateUrl: "/views/study/advance/ebsSoftware.html"
                }).when("/advance/software", {
                    templateUrl: "/views/study/advance/software.html"
                }).when("/advance/software/:specialName", {
                    templateUrl: "/views/study/advance/special.html"
                }).when("/advance/extend", {
                    templateUrl: "/views/study/advance/extend.html"
                }).when("/custom/lecture/build", {
                    templateUrl: "/views/study/custom/lecture/build.html"
                }).when("/custom/lecture/build/lecture", {
                    templateUrl: "/views/study/custom/lecture/build.html"
                }).when("/custom/lecture/build/curriculum", {
                    templateUrl: "/views/study/custom/lecture/build.html"
                }).when("/custom/lecture/build/:lectureId", {
                    templateUrl: "/views/study/custom/lecture/build.html"
                }).when("/custom/lecture/list/:page", {
                    templateUrl: "/views/study/custom/lecture/list.html"
                }).when("/custom/lecture/list", {
                    reloadOnSearch: !1,
                    templateUrl: "/views/study/custom/lecture/list.html"
                }).when("/custom/lecture/view/:lectureId", {
                    templateUrl: "/views/study/custom/lecture/view.html"
                }).when("/custom/lecture/me/view/:lectureId", {
                    templateUrl: "/views/study/custom/lecture/view.html",
                    reloadOnSearch: !1
                }).when("/custom/curriculum/build/:curriculumId", {
                    templateUrl: "/views/study/custom/curriculum/build.html"
                }).when("/custom/curriculum/build", {
                    templateUrl: "/views/study/custom/curriculum/build.html"
                }).when("/custom/curriculum/list", {
                    reloadOnSearch: !1,
                    templateUrl: "/views/study/custom/curriculum/list.html"
                }).when("/custom/curriculum/list/:page", {
                    templateUrl: "/views/study/custom/curriculum/list.html"
                }).when("/custom/curriculum/view/:curriculumId", {
                    templateUrl: "/views/study/custom/curriculum/view.html"
                }).when("/custom/curriculum/me/view/:curriculumId", {
                    templateUrl: "/views/study/custom/curriculum/view.html"
                }).when("/group/lecture/list", {
                    templateUrl: "/views/study/group/lecture/list.html",
                    reloadOnSearch: !1
                }).when("/group/lecture/list/:groupId", {
                    templateUrl: "/views/study/group/lecture/list.html",
                    reloadOnSearch: !1
                }).when("/group/lecture/list/:groupId/:page", {
                    templateUrl: "/views/study/group/lecture/list.html"
                }).when("/group/lecture/build/:lectureId/:groupId", {
                    templateUrl: "/views/study/group/lecture/build.html"
                }).when("/group/lecture/view/:lectureId/:groupId", {
                    templateUrl: "/views/study/group/lecture/view.html",
                    reloadOnSearch: !1
                }).when("/group/lecture/view/:lectureId/:groupId/:homeworkId", {
                    templateUrl: "/views/study/group/lecture/view.html",
                    reloadOnSearch: !1
                }).when("/group/curriculum/list", {
                    templateUrl: "/views/study/group/curriculum/list.html",
                    reloadOnSearch: !1
                }).when("/group/curriculum/list/:groupId", {
                    templateUrl: "/views/study/group/curriculum/list.html",
                    reloadOnSearch: !1
                }).when("/group/curriculum/list/:groupId/:page", {
                    templateUrl: "/views/study/group/curriculum/list.html",
                    reloadOnSearch: !1
                }).when("/group/curriculum/build/:curriculumId/:groupId", {
                    templateUrl: "/views/study/group/curriculum/build.html"
                }).when("/group/curriculum/build/:curriculumId", {
                    templateUrl: "/views/study/group/curriculum/build.html"
                }).when("/group/curriculum/build", {
                    templateUrl: "/views/study/group/curriculum/build.html"
                }).when("/group/curriculum/view/:curriculumId/:groupId", {
                    templateUrl: "/views/study/group/curriculum/view.html"
                }).when("/group/homework/list", {
                    templateUrl: "/views/study/group/homework/list.html",
                    reloadOnSearch: !1
                }).when("/group/homework/list/:groupId", {
                    templateUrl: "/views/study/group/homework/list.html",
                    reloadOnSearch: !1
                }).when("/group/homework/list/:groupId/:homeworkId", {
                    templateUrl: "/views/study/group/homework/list.html"
                }).when("/blocks", {
                    templateUrl: "/views/study/blocks.html"
                }).when("/me", {
                    templateUrl: "/views/study/monthly.html"
                }).when("/rc", {
                    templateUrl: "/views/study/recommend.html"
                }).when("/scholarship", {
                    templateUrl: "/views/study/scholarship.html"
                })
            }
            ]),
            angular.module("mean.partner").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/partner/index.html"
                })
            }
            ]),
            angular.module("mean.workspace").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/workspace/index.html",
                    controller: "WorkspaceController"
                }).when("/:projectId", {
                    templateUrl: "/views/workspace/index.html",
                    controller: "WorkspaceController"
                }).when("/:projectId/:groupId", {
                    templateUrl: "/views/workspace/index.html",
                    controller: "WorkspaceController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.lecture").config(["$routeProvider", function(e) {
                e.when("/:lectureId", {
                    templateUrl: "/views/lecture/index.html",
                    reloadOnSearch: !1
                }).when("/:groupId/:lectureId", {
                    templateUrl: "/views/lecture/index.html",
                    reloadOnSearch: !1
                }).when("/:groupId/:lectureId/:studentId", {
                    templateUrl: "/views/lecture/index.html",
                    reloadOnSearch: !1
                }).when("/:lectureId/:groupId/:studentId/:homeworkId/hw", {
                    templateUrl: "/views/lecture/index.html",
                    reloadOnSearch: !1
                }).when("/:lectureId/:hashId", {
                    templateUrl: "/views/lecture/index_iframe.html"
                })
            }
            ]),
            angular.module("mean.course").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "views/course/index.html",
                    reloadOnSearch: !1
                }).when("/:lectureId/:studyIndex?", {
                    templateUrl: "views/course/index.html",
                    reloadOnSearch: !1
                }).when("/group/:groupId/:lectureId/:studentId?/:studyIndex?", {
                    templateUrl: "views/course/index.html",
                    reloadOnSearch: !1
                }).when("/group/:lectureId/:groupId/:studentId/:homeworkId/hw/:studyIndex?", {
                    templateUrl: "views/course/index.html",
                    reloadOnSearch: !1
                })
            }
            ]),
            angular.module("mean.jr").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/jr/index.html"
                }).when("/:stageId", {
                    templateUrl: "/views/jr/index.html"
                }).when("/cert/:username", {
                    templateUrl: "/views/jr/certificate.html"
                }).when("/certf/:username", {
                    templateUrl: "/views/jr/certificate_full.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.ebs").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/ebs/index.html",
                    controller: "WorkspaceController"
                }).when("/:projectId", {
                    templateUrl: "/views/ebs/index.html",
                    controller: "WorkspaceController"
                }).when("/:projectId/:stageLevel", {
                    templateUrl: "/views/ebs/index.html",
                    controller: "WorkspaceController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.arts.list").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/arts/list.html"
                }).when("/favorite", {
                    templateUrl: "/views/arts/list.html",
                    controller: "ArtsListController"
                }).when("/favorite/group", {
                    templateUrl: "/views/arts/list.html",
                    controller: "ArtsListController"
                }).when("/group", {
                    templateUrl: "/views/arts/group/main.html"
                }).when("/group/:tab", {
                    templateUrl: "/views/arts/group/main.html"
                }).when("/group/invite/:groupId", {
                    templateUrl: "/views/arts/group/main.html"
                }).when("/group/:tab/detail/:groupId", {
                    templateUrl: "/views/arts/group/detail.html",
                    reloadOnSearch: !1
                }).when("/group/:tab/:page", {
                    templateUrl: "/views/arts/group/main.html"
                }).when("/group/:tab/:page/detail/:groupId", {
                    templateUrl: "/views/arts/group/detail.html"
                }).when("/:tab", {
                    templateUrl: "/views/arts/list.html",
                    controller: "ArtsListController",
                    reloadOnSearch: !0
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.arts.individualView").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/arts/view_individual.html",
                    reloadOnSearch: !1
                }).when("/p", {
                    templateUrl: "/views/arts/view_modal.html",
                    controller: "ArtsViewController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.arts.groupView").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/arts/view_group.html",
                    controller: "ArtsGroupViewController",
                    reloadOnSearch: !1
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.arts.all").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/arts/all.html",
                    reloadOnSearch: !1
                }).when("/group", {
                    templateUrl: "/views/arts/group.html",
                    reloadOnSearch: !1
                }).when("/analysis", {
                    templateUrl: "/views/arts/analysis.html",
                    controller: "ArtsAnalysisController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.discuss").config(["$routeProvider", function(e) {
                e.when("/:discussCategory/write/:discussId", {
                    templateUrl: "/views/discuss/write.html",
                    controller: "DiscussWriteController",
                    reloadOnSearch: !1
                }).when("/:discussCategory/write", {
                    templateUrl: "/views/discuss/write.html",
                    controller: "DiscussWriteController",
                    reloadOnSearch: !1
                }).when("/:discussCategory", {
                    templateUrl: "/views/discuss/all.html",
                    controller: "DiscussAllController",
                    reloadOnSearch: !1
                }).when("/:discussCategory/:discussId", {
                    templateUrl: "/views/discuss/view.html",
                    controller: "DiscussViewController",
                    reloadOnSearch: !1
                }).otherwise({
                    redirectTo: "/free",
                    reloadOnSearch: !1
                })
            }
            ]),
            angular.module("mean.admin").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/admin/index.html"
                }).when("/picture/browse", {
                    templateUrl: "/views/admin/picture/browse.html"
                }).when("/picture/browse/:type", {
                    templateUrl: "/views/admin/picture/browse.html"
                }).when("/picture/browse/:type/:main", {
                    templateUrl: "/views/admin/picture/browse.html"
                }).when("/picture/browse/:type/:main/:sub", {
                    templateUrl: "/views/admin/picture/browse.html"
                }).when("/sound/browse", {
                    templateUrl: "/views/admin/sound/browse.html"
                }).when("/sound/browse/:type", {
                    templateUrl: "/views/admin/sound/browse.html"
                }).when("/sound/browse/:type/:main", {
                    templateUrl: "/views/admin/sound/browse.html"
                }).when("/sound/browse/:type/:main/:sub", {
                    templateUrl: "/views/admin/sound/browse.html"
                }).when("/sprite/browse", {
                    templateUrl: "/views/admin/sprite/browse.html"
                }).when("/sprite/browse/:type", {
                    templateUrl: "/views/admin/sprite/browse.html"
                }).when("/sprite/browse/:type/:main", {
                    templateUrl: "/views/admin/sprite/browse.html"
                }).when("/sprite/browse/:type/:main/:sub", {
                    templateUrl: "/views/admin/sprite/browse.html"
                }).when("/sprite/view/:spriteId", {
                    templateUrl: "/views/admin/sprite/view.html"
                }).when("/feedback/list", {
                    templateUrl: "/views/admin/feedback/feedback.html",
                    controller: "FeedbackController"
                }).when("/statistics/index", {
                    templateUrl: "/views/admin/statistics/index.html",
                    controller: "StatisticsController"
                }).when("/chart/index", {
                    templateUrl: "/views/admin/chart/index.html",
                    controller: "ChartController",
                    reloadOnSearch: !1
                }).when("/staffPick", {
                    templateUrl: "/views/admin/staff_pick.html",
                    controller: "StaffPickController"
                }).when("/ebs/index", {
                    templateUrl: "/views/admin/ebs/index.html",
                    controller: "EbsController"
                }).when("/cdn", {
                    templateUrl: "/views/admin/cdn.html",
                    controller: "CdnController"
                }).when("/apps", {
                    templateUrl: "/views/admin/apps.html",
                    controller: "AppsController"
                }).when("/users", {
                    templateUrl: "/views/admin/users.html",
                    controller: "UsersController"
                }).when("/faq", {
                    templateUrl: "/views/admin/faq.html",
                    controller: "FaqController"
                }).when("/faq/:faqId", {
                    templateUrl: "/views/admin/faq.html",
                    controller: "FaqController"
                }).when("/codingparty", {
                    templateUrl: "/views/admin/codingparty.html",
                    controller: "CodingpartyController"
                }).when("/blacklist", {
                    templateUrl: "/views/admin/blacklist.html",
                    controller: "BlacklistController"
                }).when("/ipblock", {
                    templateUrl: "/views/admin/ipblock.html",
                    controller: "IpBlockController"
                }).when("/ipblock/:ipaddress", {
                    templateUrl: "/views/admin/ipblock.html",
                    controller: "IpBlockController"
                }).when("/iplog", {
                    templateUrl: "/views/admin/iplog.html",
                    controller: "IpLogController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.index").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week/index.html"
                })
            }
            ]),
            angular.module("mean.week.maze").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week/maze/index.html"
                }).when("/:stageId", {
                    templateUrl: "/views/week/maze/index.html"
                }).when("/c/n", {
                    templateUrl: "/views/week/maze/certificate.html"
                }).when("/c/c/:userkey/:username", {
                    templateUrl: "/views/week/maze/certificate.html"
                }).when("/c/f/:userkey/:username", {
                    templateUrl: "/views/week/maze/certificate_full.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.maze").config(["$routeProvider", function(e) {
                e.when("/certificate/:encodedParam", {
                    templateUrl: "/views/maze/certificate.html"
                }).when("/certificate/f/:encodedParam", {
                    templateUrl: "/views/maze/certificate_full.html"
                }).when("/maple/certificate/:encodedParam", {
                    templateUrl: "/views/maze/certificateMaple.html"
                }).when("/maple/certificate_swfest/:encodedParam", {
                    templateUrl: "/views/maze/certificateSwfest.html"
                }).when("/maple/certificate/f/:encodedParam", {
                    templateUrl: "/views/maze/certificateMaple_full.html"
                }).when("/maple/certificate_swfest/f/:encodedParam", {
                    templateUrl: "/views/maze/certificateSwfest_full.html"
                }).when("/jr", {
                    templateUrl: "/views/maze/jr_index.html",
                    reloadOnSearch: !0
                }).when("/jr/:stageNumber", {
                    templateUrl: "/views/maze/jr_index.html",
                    reloadOnSearch: !0
                }).when("/:stageName/:stageNumber", {
                    templateUrl: "/views/maze/index.html",
                    reloadOnSearch: !0
                }).when("/:stageName", {
                    templateUrl: "/views/maze/index.html",
                    reloadOnSearch: !0
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.mission").config(["$routeProvider", function(e) {
                e.when("/:stageName/:stageNumber", {
                    templateUrl: "/views/mission/index.html",
                    reloadOnSearch: !0
                }).when("/view/project/:projectId", {
                    templateUrl: "/views/mission/project.html",
                    reloadOnSearch: !0
                }).when("/certificate/:stageName/:username", {
                    templateUrl: "/views/maze/certificate.html"
                }).when("/certificate/f/:stageName/:username", {
                    templateUrl: "/views/maze/certificate_full.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.codingparty").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week/codingparty/index.html"
                }).when("/:stageId", {
                    templateUrl: "/views/week/codingparty/index.html"
                }).when("/:stageMode/:stageId", {
                    templateUrl: "/views/week/codingparty/index.html"
                }).when("/certificate/:username/:stageId", {
                    templateUrl: "/views/week/codingparty/certification.html"
                }).when("/certificate/f/:username/:stageId", {
                    templateUrl: "/views/week/codingparty/certification_full.html"
                }).when("/certificate/:userkey/:stageId", {
                    templateUrl: "/views/week/codingparty/certification.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.codingparty_2016").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week_2016/codingparty/index.html"
                }).when("/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/index.html"
                }).when("/:stageMode/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/index.html"
                }).when("/certificate/:username/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/certification.html"
                }).when("/certificate/f/:username/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/certification_full.html"
                }).when("/certificate/:userkey/:username/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/certification.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.codingpartyRangers").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week_2016/codingparty/index.html",
                    controller: "codingpartyRangersController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.codingpartyChoseok").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/codingpartyChoseok.html",
                    controller: "codingpartyChoseokController"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.codingpartyMaple").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week_2016/codingparty/codingpartyMaple.html"
                }).when("/certificate/:username/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/badgeCertification.html"
                }).when("/certificate/f/:username/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/badgeCertification_full.html"
                }).when("/certificate/:userkey/:username/:stageId", {
                    templateUrl: "/views/week_2016/codingparty/badgeCertification.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.study.maze").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/study/maze/index.html"
                }).when("/:stageMode/:stageId", {
                    templateUrl: "/views/study/maze/index.html"
                }).when("/certificate/:username/:stageId", {
                    templateUrl: "/views/study/maze/certification.html"
                }).when("/certificate/f/:username/:stageId", {
                    templateUrl: "/views/study/maze/certification_full.html"
                }).when("/certificate/:userkey/:username/:stageId", {
                    templateUrl: "/views/study/maze/certification.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.cfest").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week/maze/cfest.html"
                }).when("/:stageId", {
                    templateUrl: "/views/week/maze/cfest.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.week.ai").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/week/ai/index.html"
                }).when("/:stageId", {
                    templateUrl: "/views/week/ai/index.html"
                }).when("/c/n", {
                    templateUrl: "/views/week/ai/certificate.html"
                }).when("/c/c/:userkey/:username", {
                    templateUrl: "/views/week/ai/certificate.html"
                }).when("/c/f/:userkey/:username", {
                    templateUrl: "/views/week/ai/certificate_full.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.ebs2015").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/ebs_2015/view.html"
                }).when("/lecture/view/:lectureId", {
                    templateUrl: "/views/study/custom/lecture/view.html",
                    reloadOnSearch: !1
                }).when("/:ebsId", {
                    templateUrl: "/views/ebs_2015/view.html"
                }).when("/:ebsId/:stageId", {
                    templateUrl: "/views/ebs_2015/view.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.util").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/workspace/print.html"
                }).when("/:projectId", {
                    templateUrl: "/views/workspace/print.html"
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.analyze").config(["$routeProvider", function(e) {
                e.when("/", {
                    templateUrl: "/views/analyze/index.html",
                    reloadOnSearch: !1
                }).otherwise({
                    redirectTo: "/"
                })
            }
            ]),
            angular.module("mean.util").config(["$locationProvider", function(e) {
                e.hashPrefix("!")
            }
            ]),
            angular.module("mean.common").config(["$locationProvider", function(e) {
                e.hashPrefix("!")
            }
            ]),
            angular.module("mean.common").constant("config", {
                webroot: "/uploads/"
            }),
            angular.module("mean.common").config(["$httpProvider", function(e) {
                e.interceptors.push("noCacheInterceptor")
            }
            ]).factory("noCacheInterceptor", function() {
                return {
                    request: function(e) {
                        if ("GET" == e.method && (~e.url.indexOf("/api") || ~e.url.indexOf("/log/"))) {
                            var t = -1 === e.url.indexOf("?") ? "?" : "&";
                            e.url = e.url + t + "noCache=" + (new Date).getTime()
                        }
                        return ~e.url.indexOf("/log/") && (e.timeout = 5e3),
                            e
                    }
                }
            })
    },
    974: function(e, t, n) {
        "use strict";
        angular.module("mean.common").controller("IndexFooterController", ["$scope", "Global", "$cookies", function(e, t, n) {
            e.global = t,
                e.isLangClicked = !1,
                e.langs = {
                    ko: Lang.ko,
                    en: Lang.en,
                    vn: Lang.vn,
                    jp: Lang.jp
                };
            var r = n.get("banner")
                , a = (new Date).getTime()
                , o = !1;
            $("section.content").css("min-height", innerHeight - 24),
                $(window).resize(function(e) {
                    $("section.content").css("min-height", innerHeight - 24)
                }),
            r && (o = a - r > 864e5),
                e.bannerShow = void 0 == r || o,
                e.lang = n.get("lang"),
            e.lang || (e.lang = "ko"),
                e.init = function() {
                    delete e.langs[e.lang]
                }
                ,
                e.showNoticePopup = function() {
                    var e = $("#noticePopup")
                        , t = $(document).scrollTop() + "px";
                    e.css("display", "block"),
                        e.css("top", t + "px")
                }
                ,
                e.hidePopup = function(e) {
                    var t = new Date;
                    t.setHours(0),
                        t.setMinutes(0),
                        t.setDate(t.getDate() + 7),
                        n.put("noticePopup", !0, {
                            expires: t
                        });
                    var r = $("#" + e)
                        , a = $("body").eq(0);
                    a.css("overflow", "auto"),
                        a.css("overflow-y", "auto"),
                        r.css("display", "none"),
                        $.event.trigger({
                            type: "hidePopup"
                        })
                }
                ,
                e.isLang = function(e) {
                    return n.get("lang") == e
                }
                ,
                e.status = {
                    isopen: !1
                },
                e.toggleDropdown = function(t) {
                    e.status.isopen = !e.status.isopen
                }
                ,
                e.changeLang = function(t) {
                    _.each(e.langs, function(e, r) {
                        e === t && n.put("lang", r)
                    }),
                        window.location.reload()
                }
                ,
                e.langType = function(e) {
                    return Lang.type == e
                }
                ,
                e.getReadableLang = function() {
                    return Lang[e.lang]
                }
                ,
                e.goDiscuss = function() {
                    window.open("/ds#!/notice/56a1e350085b4bd63c49d666?category=notice&sort=created&rows=20&page=1", "_blank")
                }
                ,
                e.go = function(e) {
                    window.open(e)
                }
        }
        ])
    },
    979: function(e, t) {
        angular.module("mean.common").controller("LoginController", ["$scope", "Global", "$http", "$location", "$cookies", "Users", "$sce", "$uibModal", "$timeout", "$rootScope", function(e, t, n, r, a, o, i, s, l, u) {
            function c(r, a) {
                var o = r.username
                    , i = r.password;
                n.post("/api/user/auth", {
                    email: o,
                    password: i,
                    netfficeUserId: window.netfficeUserId,
                    rememberme: e.remember
                }).success(function(o, i) {
                    t.resetCpartySession(),
                        e.role = r.role,
                        e.userId = o,
                        "emailAuthAlert"in r && r.emailAuthAlert || "student" == r.role || "isEmailAuth"in r && r.isEmailAuth ? (e.hidePopup("loginPopup"),
                            e.emailAuth = !1,
                            a ? a() : m()) : ($(".loginBoxTitle").css("display", "none"),
                            $(".loginBoxContent").css("display", "none"),
                            $(".loginWrapperIH").css("border", "0px"),
                            e.emailAuth = !0,
                            n.get("/api/user/updateEmailAuth/" + r._id).success(function(e) {}).error(function(e) {}))
                }).error(function(t, n) {
                    $.isPlainObject(t) && "Blocked User" === t.message ? e.userCheckList.pwd = Lang.Menus.blocked_user : e.userCheckList.pwd = Lang.Menus.incorrect_password,
                        $("#password").val(""),
                        $("#password").focus()
                })
            }
            e.isLoginVisible = !1,
                e.init = function() {
                    $(document).on("showLogin", e.showLogin),
                        $(document).on("checkRevoke", e.checkRevoke),
                        e.projectTerm = !1,
                        e.refusePrTerm = !1,
                        e.personalAgree = {
                            open: !1,
                            use: !1,
                            edit: !1,
                            all: !1
                        }
                }
                ,
                e.emailAuth = !1,
                e.userCheckList = {
                    id: null,
                    pwd: null
                },
                e.loginPopupStyle = {},
                e.showLogin = function() {
                    var t = window.location.pathname;
                    sessionStorage.setItem("loginPage", t),
                        e.isLoginVisible = !0;
                    var n = $("body").eq(0);
                    "/ws" == t || "/le" == t ? n.css("overflow", "hidden") : n.css("overflow-y", "hidden"),
                        e.loginPopupStyle = {
                            top: $(document).scrollTop() + "px"
                        },
                        function(t) {
                            if (!e.isLoginVisible)
                                return;
                            var n = $(window).height()
                                , r = $(".loginWrapperIH").eq(0);
                            n < 462 ? (r.css("top", 0),
                                r.css("margin-top", 15),
                                r.css("margin-bottom", 15),
                                $("#loginPopup").scrollTop(0)) : (r.css("top", "50%"),
                                r.css("margin-bottom", 0),
                                r.css("margin-top", -216))
                        }(),
                        l(function() {
                            e.$apply()
                        })
                }
                ,
                e.checkBoxAccessTerm = function(t) {
                    e.accessTerm[0][t] = !e.accessTerm[0][t]
                }
                ,
                e.hidePopup = function(t, n, r) {
                    e.isLoginVisible = !1;
                    var a = $("body").eq(0);
                    a.css("overflow", "auto"),
                        a.css("overflow-y", "auto"),
                    r || $.event.trigger({
                        type: "hidePopup"
                    }),
                    n && location.hash.indexOf("group/my/detail") > 0 && (window.location.href = "/")
                }
                ,
                e.rememberMe = function() {
                    e.remember = !e.remember
                }
                ,
                e.test = "dasdas",
                e.checkUserName = function() {
                    var t = $("#name")
                        , r = t.val();
                    r && n({
                        method: "GET",
                        url: "/api/checkUserName/" + r
                    }).success(function(n, r) {
                        "exist" != n.isExist ? (e.userCheckList.id = Lang.Menus.id_not_exist,
                            t.val(""),
                            t.focus()) : "exist" == n.isExist && (e.userCheckList.id = null)
                    }).error(function(t, n) {
                        e.data = "0",
                            e.status = n
                    })
                }
                ,
                e.signin = function() {
                    var t = $("#name").val()
                        , r = $("#password").val();
                    n.get("/api/user/authinfo/" + t).success(function(t) {
                        if (t.password = r,
                            "withdrawDate"in t && t.withdrawDate) {
                            var a = Lang.Msgs.cancel_deletion_your_account;
                            a = a.replace(/\$1/gi, t.username),
                                entrylms.confirm({
                                    outerHTML: a
                                }, Lang.Menus.account_deletion).then(function(r) {
                                    !0 === r ? (e.hidePopup("loginPopup"),
                                        c(t, function() {
                                            n.get("/api/user/withdraw/" + t._id).success(function(e) {
                                                entrylms.alert({
                                                    outerHTML: Lang.Msgs.account_deletion_canceled_complete
                                                }, Lang.Menus.account_deletion).on("hide", function() {
                                                    m()
                                                })
                                            })
                                        })) : (e.hidePopup("loginPopup"),
                                        n.get("/out"))
                                })
                        } else
                            c(t)
                    })
                }
                ,
                e.goToPersonal = function() {
                    e.emailAuth = !1,
                        window.location.href = "/#!/personal?reload=true"
                }
                ,
                e.closePopup = function() {
                    e.hidePopup("loginPopup"),
                        m()
                }
                ,
                e.keydownPrevent = function(e) {
                    e.stopPropagation()
                }
                ,
                e.goToJoin = function() {
                    var t = !1;
                    window.location.pathname.indexOf("codingparty/maple") > -1 && (t = !0),
                        e.hidePopup("loginPopup", !1, t),
                        e.showSignUp()
                }
                ,
                e.showSignUp = function() {
                    $.event.trigger({
                        type: "showSignUp"
                    })
                }
                ,
                e.isLang = function(e) {
                    var t = a.get("lang");
                    return void 0 == t && (t = "ko"),
                    t === e
                }
            ;
            function m() {
                u.$broadcast("attemptLogin"),
                    window.location.reload()
            }
            e.togglePersonal = function(t) {
                if ("all" == t && 0 == e.personalAgree.all)
                    for (var n in e.personalAgree)
                        e.personalAgree[n] = !0;
                else if ("all" == t && 1 == e.personalAgree.all)
                    for (var n in e.personalAgree)
                        e.personalAgree[n] = !1;
                if ("all" != t) {
                    e.personalAgree[t] = !e.personalAgree[t];
                    var r = e.personalAgree;
                    r.open && r.use && r.edit && (e.personalAgree.all = !0)
                }
                1 == e.personalAgree.all && (e.personalAgree[t] || (e.personalAgree.all = !1))
            }
                ,
                e.viewProject = function(t) {
                    window.open("/" + e.openPjUser + "/" + t, "_blank")
                }
                ,
                e.closeAndFindPassword = function(t) {
                    location.href = "/#!/findPassword",
                        e.hidePopup(t)
                }
                ,
                e.checkRevoke = function(r) {
                    r && r.user && (e.userId = r.user,
                        n.get("/api/user/revokecheck/" + e.userId).success(function(e) {
                            e.isDetached ? s.open({
                                templateUrl: "/views/index/revoke.html",
                                controller: "RevokeController",
                                keyboard: !1,
                                backdrop: "static",
                                size: "revoke-frame",
                                animation: !1
                            }).result.then(function(e) {
                                e && "restore" == e.cmd ? n.put("/api/user/restore").success(function() {
                                    t.setCheckRevoke("restored", function() {
                                        m()
                                    })
                                }).error(function(e) {
                                    t.setCheckRevoke("restored", function() {
                                        m()
                                    })
                                }) : (t.resetCpartySession(),
                                    t.resetUserWorkspace(),
                                    window.location.href = "/out")
                            }) : t.setCheckRevoke("completed")
                        }))
                }
        }
        ]),
            angular.module("mean.common").controller("RevokeController", ["$scope", "$uibModalInstance", function(e, t) {
                e.cancel = function() {
                    t.close({
                        cmd: "cancel"
                    })
                }
                    ,
                    e.ok = function() {
                        t.close({
                            cmd: "restore"
                        })
                    }
            }
            ])
    },
    986: function(e, t) {
        angular.module("mean.common").controller("SignUpController", ["$scope", "Global", "$http", "$location", "$cookies", "Users", function(e, t, n, r, a, o) {
            e.global = t,
                e.isLang = t.isLang,
                e.init = function() {
                    e.global.user || (e.global.user = {}),
                        $(document).on("showSignUp", e.showSignUp),
                        e.setInitialState()
                }
                ,
                e.checkUserList = {
                    useageTerm: null,
                    personalTerm: null,
                    already_exist_id: null,
                    password_validate_pwd: null,
                    password_validate_same: null,
                    insert_studying_stage: null,
                    insert_gender: null,
                    email: null
                },
                e.checkUserName = function() {
                    var t = $("#name");
                    n({
                        method: "GET",
                        url: "/api/checkUserName/" + t.val()
                    }).success(function(e, n) {
                        "exist" != e.isExist && (entrylms.alert("아이디가 존재하지 않습니다."),
                            t.val(""),
                            t.focus())
                    }).error(function(t, n) {
                        e.data = "0",
                            e.status = n
                    })
                }
                ,
                e.stopPropagation = function(e) {
                    e.stopPropagation()
                }
                ,
                e.showPopup = function(t) {
                    e.currentPage = 1;
                    var n = $("#" + t)
                        , r = $("body").eq(0);
                    n.css("top", r.scrollTop() + "px"),
                        n.css("display", "block")
                }
                ,
                e.hidePopup = function(e) {
                    var t = $("#" + e)
                        , n = $("body").eq(0);
                    n.css("overflow", "auto"),
                        n.css("overflow-y", "auto"),
                        t.css("display", "none"),
                        $.event.trigger({
                            type: "hidePopup"
                        })
                }
                ,
                e.setInitialState = function() {
                    e.currentPage = 1,
                        e.sex = "male",
                        e.job = "student",
                        e.terms = !1,
                        e.terms2 = !1,
                        e.userFlag = !1,
                        e.emailFlag = !1,
                        e.isSignUpVisible = !1,
                        e.isSignUpAgree = !1,
                        e.studying_stages = EntryStatic.lectureGrades,
                        e.grade = "",
                        $("#studying_stage").val(""),
                        $("#userId").val(""),
                        $("#password1").val(""),
                        $("#password2").val(""),
                        $("#sex").val(""),
                        $("#email").val("")
                }
                ,
                e.showSignUp = function() {
                    var t = window.location.pathname;
                    e.setInitialState(),
                        e.isSignUpVisible = !0,
                        e.reloadAfter = !0;
                    var n = window.netfficeUserId;
                    n && e.handleNetfficeLogin(n);
                    var r = $("#signUpPopup")
                        , a = $(document)
                        , o = $("body").eq(0)
                        , i = a.scrollTop() + "px";
                    switch ((t.indexOf("maze") > 0 || t.indexOf("codingparty") > 0) && (e.reloadAfter = !1),
                        t) {
                        case "/ws":
                        case "/le":
                        case "/course":
                            o.css("overflow", "hidden");
                            break;
                        case "/login_from_netffice":
                        default:
                            o.css("overflow-y", "hidden")
                    }
                    r.css("display", "block"),
                        r.css("top", i)
                }
                ,
                e.handleNetfficeLogin = function() {
                    e.netfficeUserId = window.netfficeUserId,
                        $.ajax({
                            url: "https://api.netffice24.com/os/mobile/getUserInfo",
                            type: "GET",
                            headers: {
                                Accept: "application/json",
                                "x-zeropc-mapi-sid": window.netfficeSid
                            }
                        }).done(function(t) {
                            e.emailFlag = !0,
                                $("#email").val(t.data.user_email)
                        })
                }
                ,
                e.setJob = function(t) {
                    e.job = t
                }
                ,
                e.setUserFlag = function(t) {
                    e.userFlag = t
                }
                ,
                e.reverseTerms = function() {
                    e.terms = !e.terms
                }
                ,
                e.reverseTerms2 = function() {
                    e.terms2 = !e.terms2
                }
                ,
                e.goNextSignUp = function() {
                    var t = $("#email").val();
                    t && "" != t || (e.emailFlag = !0,
                        e.email = "");
                    var r, a, o = e.currentPage;
                    if (1 == o) {
                        if (!e.terms)
                            return void (e.checkUserList.useageTerm = Lang.Menus.agree_terms_conditions);
                        if (e.checkUserList.useageTerm = "",
                                !e.terms2)
                            return void (e.checkUserList.personalTerm = Lang.Menus.agree_personal_information);
                        e.checkUserList.personalTerm = "",
                            e.isSignUpAgree = !0,
                            e.currentPage++
                    } else {
                        if (2 == o && !e.userFlag)
                            return void function() {
                                var t = jQuery("#userId").val();
                                if (!/^([a-zA-Z0-9_\.\-\%]{4,20})$/.test(t))
                                    return e.checkUserList.already_exist_id = Lang.Menus.id_validation_id,
                                        !1;
                                e.checkUserList.already_exist_id = null;
                                n({
                                    method: "GET",
                                    url: "/api/checkUserName/" + t
                                }).success(function(t, n) {
                                    if ("exist" == t.isExist)
                                        return e.checkUserList.already_exist_id = Lang.Menus.already_exist_id,
                                            !1;
                                    e.checkUserList.already_exist_id = null,
                                        e.userFlag = !0,
                                        e.goNextSignUp()
                                }).error(function(t, n) {
                                    e.data = "0",
                                        e.status = n
                                })
                            }();
                        if (2 == o && e.userFlag) {
                            if (!(jQuery("#password1").val().length >= 5 ? (e.checkUserList.password_validate_pwd = null,
                                    !0) : (e.checkUserList.password_validate_pwd = Lang.Menus.validation_password,
                                    !1)))
                                return;
                            if (!(r = jQuery("#password1").val(),
                                    a = jQuery("#password2").val(),
                                    r !== a ? (e.checkUserList.password_validate_same = Lang.Menus.insert_same_pwd,
                                        !1) : (e.checkUserList.password_validate_same = null,
                                        !0)))
                                return;
                            e.currentPage++
                        } else if (3 == o && e.emailFlag) {
                            var i = $("#studying_stage").val();
                            if (!i || i.length < 1)
                                return void (e.checkUserList.insert_studying_stage = Lang.Menus.insert_studying_stage);
                            if (e.checkUserList.insert_studying_stage = null,
                                "" == $("#sex").val())
                                return void (e.checkUserList.insert_gender = Lang.Menus.choose_gender);
                            e.checkUserList.insert_gender = null,
                                function(t) {
                                    var r = $("#studying_stage").val()
                                        , a = $("#userId").val()
                                        , o = $("#password1").val()
                                        , i = $("#sex").val()
                                        , s = e.job
                                        , l = $("#email").val()
                                        , r = e.grade
                                        , u = {
                                        username: a,
                                        password: o,
                                        sex: i,
                                        job: s,
                                        email: l,
                                        grade: r,
                                        netffice: {
                                            userid: e.netfficeUserId
                                        }
                                    };
                                    n.post("/usr", u).success(function(e) {
                                        t()
                                    }).error(function(e, t) {
                                        return entrylms.alert(Lang.Menus.error_try_again)
                                    })
                                }(function() {
                                    e.currentPage++
                                })
                        } else if (3 != o || e.emailFlag)
                            4 == o && (e.hidePopup("signUpPopup"),
                            e.reloadAfter && ("/" == window.location.pathname ? window.location.hash = "#!/" : window.location.href = "/"));
                        else {
                            if (!function(e) {
                                    return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
                                }(t))
                                return void (e.checkUserList.email = Lang.Menus.check_email);
                            e.checkUserList.email = null,
                                function(t) {
                                    n({
                                        method: "GET",
                                        url: "/api/checkEmailDup/" + t
                                    }).success(function(t, n) {
                                        "exist" != t.isExist ? (e.email = "",
                                            e.email = $("#email").val(),
                                            e.emailFlag = !0,
                                            e.goNextSignUp()) : e.checkUserList.email = Lang.Menus.already_exist_email
                                    }).error(function(t, n) {
                                        e.data = "0",
                                            e.status = n
                                    })
                                }(t)
                        }
                    }
                    2 == e.currentPage && (e.userFlag = !1),
                    3 == e.currentPage && (e.emailFlag = !1)
                }
                ,
                e.goPrevSignUp = function() {
                    e.currentPage--,
                    2 == e.currentPage && (e.userFlag = !1),
                    3 == e.currentPage && (e.emailFlag = !1)
                }
                ,
                e.langType = function(e) {
                    return Lang.type == e
                }
                ,
                e.dict = {
                    MENUS_JOIN: Lang.Menus.Join,
                    MENUS_START_SOFTWARE: Lang.Menus.start_software,
                    MENUS_WELCOME_ENTRY: Lang.Menus.welcome_entry,
                    MENUS_STUDENT: Lang.Menus.student,
                    MENUS_TEACHER: Lang.Menus.teacher,
                    MENUS_TERMS_CONDITIONS: Lang.Menus.terms_conditions,
                    MENUS_ESSENTIAL: Lang.Menus.essential,
                    MENUS_ENTRY_AGREE: Lang.Menus.entry_agree,
                    MENUS_PERSONAL_INFORMATION: Lang.Menus.personal_information,
                    MENUS_PERSONAL_INFO: Lang.Menus.personal_info,
                    MENUS_ENTER_ID: Lang.Menus.enter_id,
                    MENUS_ENTER_PASSWORD: Lang.Menus.enter_password,
                    MENUS_CONFIRM_PASSWORD: Lang.Menus.confirm_password,
                    MENUS_STUDYING_STAGE: Lang.Menus.studying_stage,
                    MENUS_OPTION: Lang.Menus.option,
                    MENUS_PREV: Lang.Menus.prev,
                    MENUS_NEXT: Lang.Menus.next,
                    MENUS_STUDYING_STAGE: Lang.Menus.studying_stage,
                    MENUS_GENDER: Lang.Menus.gender,
                    MENUS_CHOOSE_GENDER: Lang.Menus.choose_gender,
                    MENUS_MALE: Lang.Menus.male,
                    MENUS_FEMALE: Lang.Menus.female,
                    MENUS_OPTION_EMAIL: Lang.Menus.option_email,
                    USER_EMAIL: Lang.Users.email,
                    MENUS_OPTIONAL: Lang.Menus.optional,
                    MENUS_INSERT_EMAIL: Lang.Menus.insert_email,
                    MENUS_SIGN_UP_COMPLETE: Lang.Menus.sign_up_complete,
                    BUTTONS_CONFIRM: Lang.Buttons.confirm
                },
                e.getStudyingStage = function(e) {
                    return Lang.EntryStatic[e]
                }
        }
        ])
    }
});
