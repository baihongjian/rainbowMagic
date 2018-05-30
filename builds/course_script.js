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
        n(n.s = 1066)
}({
    1066: function(e, t, n) {
        n(482),
            n(286),
            n(43),
            n(961),
            n(963),
            n(962),
            n(964),
            n(284),
            n(282),
            n(479),
            n(283),
            n(621)
    },
    282: function(e, t) {
        angular.module("mean.entry").controller("PictureController", ["$scope", "$uibModalInstance", "$routeParams", "Global", "$http", "parent", "$filter", function(e, t, n, r, a, o, i) {
            e.global = r,
                e.parent = o,
                e.tabs = [{
                    title: "Workspace.select_picture",
                    category: "system",
                    partial: "/views/workspace/modal/picture_library.html",
                    active: !0
                }, {
                    title: "Workspace.upload",
                    category: "upload",
                    partial: "/views/workspace/modal/picture_upload.html"
                }, {
                    title: "Workspace.draw_new",
                    category: "newPicture",
                    partial: "/views/workspace/modal/picture_draw_new.html"
                }],
                e.systemPictures = [],
                e.uploadPictures = [],
                e.showCount = 24,
                e.cursor = 0,
                e.main_menu = "entrybot_friends",
                e.menu = "",
                e.dataLoadCallbackApplied = !1,
                e.searchWord = "",
                e.applyOriginal = !1,
                e.toggleApplyOriginal = function() {
                    e.applyOriginal = !e.applyOriginal;
                    for (var t = e.selectedUpload, n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        e.applyOriginal ? (a.filename = a.origin.filename,
                            a.dimension.width = a.origin.width,
                            a.dimension.height = a.origin.height) : (a.filename = a.trimmed.filename,
                            a.dimension.width = a.trimmed.width,
                            a.dimension.height = a.trimmed.height)
                    }
                }
            ;
            var s = function() {
                var t = $(".tab-right").height()
                    , n = parseInt(t / 148);
                e.showCount = 6 * (n + 1),
                    e.showCount < 24 && (e.showCount = 24)
            };
            e.init = function() {
                n.type = "default",
                    n.main = "entrybot_friends",
                    e.collapse(1),
                    s(),
                    $.isPlainObject(o) && o.id ? e.findPictureById(o.id, function(t) {
                        t.selected = "boxOuter selected",
                            e.selectSystem(t),
                            e.dataLoaded = !0,
                            e.applyDataLoadCallback()
                    }) : e.findPictures(n.type, n.main, n.sub)
            }
                ,
                e.$on("$includeContentLoaded", function() {
                    e.includesLoaded = !0,
                        e.applyDataLoadCallback()
                }),
                e.applyDataLoadCallback = function() {
                    e.dataLoaded && e.includesLoaded && !e.dataLoadCallbackApplied && o.dataLoadCallback && _.isFunction(o.dataLoadCallback) && (e.dataLoadCallbackApplied = !0,
                        setTimeout(function() {
                            o.dataLoadCallback(),
                                Entry.dispatchEvent("windowResized")
                        }, 200))
                }
                ,
                e.findPictureById = function(t, n) {
                    a.get("/api/picture/" + t).then(function(t) {
                        var r = t.data;
                        r.selected = "boxOuter",
                            e.systemPictures.push(r),
                            e.collapse(0),
                            e.main_menu = "",
                            n && n(r)
                    }).catch(function(e) {
                            console.error(e)
                        })
                }
                ,
                e.findPictures = function(t, n, r) {
                    s();
                    var o = "/api/picture/browse";
                    t || (t = "default"),
                        o += "/" + t,
                        n && (e.main_menu = n,
                            o += "/" + encodeURIComponent(n),
                            r ? (e.menu = r,
                                o += "/" + encodeURIComponent(r)) : e.menu = ""),
                        a({
                            method: "GET",
                            url: o
                        }).success(function(t, n) {
                                for (var r in e.systemPictures = [],
                                    t) {
                                    var a = t[r];
                                    for (var o in a.selected = "boxOuter",
                                        e.selectedPictures)
                                        if (e.selectedPictures[o]._id === a._id) {
                                            a.selected = "boxOuter selected";
                                            break
                                        }
                                    e.systemPictures.push(a)
                                }
                            }).error(function(t, n) {
                                e.status = n
                            })
                }
                ,
                e.search = function() {
                    if (s(),
                        e.searchWord = $("#searchWord").val(),
                        _.isEmpty(e.searchWord))
                        return entrylms.alert(Lang.Menus.searchword_required),
                            !1;
                    a.get("/api/picture/search/" + e.searchWord.trim()[0]).then(function(t) {
                        var n = t.data
                            , r = e.selectedPictures;
                        e.systemPictures = Entry.Utils.fuzzy.filter(e.searchWord, n, {
                            extract: function(e) {
                                return e.label && e.label[window.lang] ? e.label[window.lang] : e.name
                            }
                        }).map(function(e) {
                                var t = e.original
                                    , n = t._id
                                    , a = _.find(r, function(e) {
                                        return n === e._id
                                    });
                                return t.selected = a ? "boxOuter selected" : "boxOuter",
                                    t
                            }),
                            e.collapse(0),
                            e.main_menu = ""
                    })
                }
                ,
                e.upload = function() {
                    var t = document.getElementById("uploadFile").files;
                    if (!t || 0 === t.length)
                        return entrylms.alert(Lang.Menus.file_required),
                            !1;
                    if (t.length > 10)
                        return entrylms.alert(Lang.Menus.file_upload_max_count),
                            !1;
                    for (var n = 0, r = t.length; n < r; n++) {
                        var a = t[n]
                            , o = /^image\//.test(a.type)
                            , i = /^image\/gif/.test(a.type);
                        if (!o || i)
                            return entrylms.alert(Lang.Workspace.upload_not_supported_file_msg),
                                document.getElementById("uploadFile").value = "",
                                !1;
                        if (a.size > 10485760)
                            return entrylms.alert(Lang.Menus.file_upload_max_size),
                                document.getElementById("uploadFile").value = "",
                                !1
                    }
                    e.$apply(function() {
                        e.isUploading = !0
                    });
                    var s = new FormData;
                    s.append("type", "user");
                    for (n = 0,
                             r = t.length; n < r; n++) {
                        a = t[n];
                        s.append("uploadFile" + n, a)
                    }
                    e.uploadPictureFile(s)
                }
                ,
                e.uploadPictureFile = function(t) {
                    $.ajax({
                        url: "/api/picture/upload",
                        data: t,
                        cache: !1,
                        contentType: !1,
                        processData: !1,
                        type: "POST",
                        success: function(t) {
                            t && t.length > 0 && e.$apply(function() {
                                e.isUploading = !1,
                                    e.uploadPictures || (e.uploadPictures = []),
                                    t.forEach(function(t) {
                                        e.uploadPictures.push(t)
                                    })
                            })
                        },
                        error: function() {
                            e.apply(function() {
                                e.isUploading = !1,
                                    entrylms.alert(Lang.Msgs.error_occured)
                            })
                        }
                    })
                }
                ,
                e.collapse = function(t) {
                    for (var n = 1; n <= 12; n++)
                        e["isCollapsed" + n] = !0;
                    t > 0 && (e["isCollapsed" + t] = !1,
                        $("#searchWord").val(""))
                }
                ,
                e.currentTab = "system",
                e.selectedPictures = [],
                e.selectedUpload = [],
                e.applySystem = function(n) {
                    e.selectedPictures = [],
                        e.selectedPictures.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                }
                ,
                e.selectSystem = function(t) {
                    var n = !1;
                    for (var r in e.selectedPictures) {
                        e.selectedPictures[r]._id === t._id && (e.selectedPictures.splice(r, 1),
                            n = !0)
                    }
                    if (n) {
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter")
                        });
                        e.moveContainer("right")
                    } else {
                        e.selectedPictures.push(t);
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter selected")
                        });
                        e.moveContainer("left")
                    }
                }
                ,
                e.applyUpload = function(n) {
                    e.applyOriginal ? (n.filename = n.origin.filename,
                        n.dimension.width = n.origin.width,
                        n.dimension.height = n.origin.height) : (n.filename = n.trimmed.filename,
                        n.dimension.width = n.trimmed.width,
                        n.dimension.height = n.trimmed.height),
                        a.put("/api/picture/" + n._id, n).success(function(r, o) {
                            a.delete("/api/picture/delete/" + n._id),
                                e.selectedUpload = [],
                                e.selectedUpload.push(n),
                                t.close({
                                    target: e.currentTab,
                                    data: e.currentSelected()
                                })
                        })
                }
                ,
                e.selectUpload = function(t) {
                    var n = !1;
                    for (var r in e.selectedUpload) {
                        e.selectedUpload[r]._id === t._id && (e.selectedUpload.splice(r, 1),
                            n = !0)
                    }
                    if (n) {
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter")
                        });
                        e.moveContainer("right")
                    } else {
                        var a = JSON.parse(JSON.stringify(t));
                        e.applyOriginal ? (a.filename = a.origin.filename,
                            a.dimension.width = a.origin.width,
                            a.dimension.height = a.origin.height) : (a.filename = a.trimmed.filename,
                            a.dimension.width = a.trimmed.width,
                            a.dimension.height = a.trimmed.height),
                            e.selectedUpload.push(a);
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter selected")
                        });
                        e.moveContainer("left")
                    }
                }
                ,
                e.changeTab = function(t) {
                    jQuery(".modal_selected_container_moving").eq(0).css("margin-left", 0),
                        e.currentTab = t
                }
                ,
                e.moveContainer = function(t) {
                    var n = e.selectedPictures;
                    if ("upload" == e.currentTab && (n = e.selectedUpload),
                        !("left" == t && (e.cursor == n.length - 1 || n.length - 1 < 5) || "right" == t && (0 == e.cursor || n.length < 5 && e.cursor > n.length))) {
                        var r = jQuery(".modal_selected_container_moving").eq(0)
                            , a = parseInt(r.css("margin-left"));
                        "left" == t ? (r.css("margin-left", a - 106 + "px"),
                            e.cursor = e.cursor + 1) : (r.css("margin-left", a + 106 + "px"),
                            e.cursor = e.cursor - 1)
                    }
                }
                ,
                e.currentSelected = function() {
                    return "system" === e.currentTab ? (e.selectedPictures.forEach(function(e) {
                        e.name = i("nameFilter")(e)
                    }),
                        e.selectedPictures) : "upload" === e.currentTab ? e.selectedUpload : "textBox" === e.currentTab ? "textBox" : null
                }
                ,
                e.showChoosen = function() {
                    return "newPicture" != e.currentTab
                }
                ,
                e.ok = function() {
                    if (e.currentSelected()) {
                        for (var n = e.currentSelected(), r = 0, o = n.length; r < o; r++) {
                            var i = n[r];
                            i.trimmed && a.put("/api/picture/" + i._id, i).success(function(e, t) {
                                a.delete("/api/picture/delete/" + i._id)
                            })
                        }
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                    } else
                        entrylms.alert(Lang.Workspace.select_sprite)
                }
                ,
                e.cancel = function() {
                    t.dismiss("cancel")
                }
                ,
                e.addNewPicture = function() {
                    t.close({
                        target: "new"
                    })
                }
                ,
                e.loadMore = function() {
                    e.showCount < e.systemPictures.length && (e.showCount += 6)
                }
                ,
                e.dict = {
                    WORKSPACE_ADD_PICTURE: Lang.Workspace.add_picture,
                    MENUS_APPLY_ORIGINAL_IMAGE: Lang.Menus.apply_original_image,
                    WORKSPACE_ALL: Lang.Workspace.all,
                    CATEGORY_ANIMAL: Lang.Category.animal,
                    CATEGORY_ANIMAL_FLYING: Lang.Category.animal_flying,
                    CATEGORY_ANIMAL_LAND: Lang.Category.animal_land,
                    CATEGORY_ANIMAL_WATER: Lang.Category.animal_water,
                    CATEGORY_ANIMAL_OTHERS: Lang.Category.animal_others,
                    CATEGORY_ENTRYBOT_FRIENDS: Lang.Category.entrybot_friends,
                    CATEGORY_PEOPLE: Lang.Category.people,
                    CATEGORY_PLANT: Lang.Category.plant,
                    CATEGORY_PLANT_FLOWER: Lang.Category.plant_flower,
                    CATEGORY_PLANT_TREE: Lang.Category.plant_tree,
                    CATEGORY_PLANT_GRASS: Lang.Category.plant_grass,
                    CATEGORY_PLANT_OTHERS: Lang.Category.plant_others,
                    CATEGORY_VEHICLES: Lang.Category.vehicles,
                    CATEGORY_VEHICLES_FLYING: Lang.Category.vehicles_flying,
                    CATEGORY_VEHICLES_LAND: Lang.Category.vehicles_land,
                    CATEGORY_VEHICLES_WATER: Lang.Category.vehicles_water,
                    CATEGORY_VEHICLES_OTHERS: Lang.Category.vehicles_others,
                    CATEGORY_ARCHITECT: Lang.Category.architect,
                    CATEGORY_ARCHITECT_BUILDING: Lang.Category.architect_building,
                    CATEGORY_ARCHITECT_MONUMENT: Lang.Category.architect_monument,
                    CATEGORY_ARCHITECT_OTHERS: Lang.Category.architect_others,
                    CATEGORY_FOOD: Lang.Category.food,
                    CATEGORY_FOOD_VEGETABLES: Lang.Category.food_vegetables,
                    CATEGORY_FOOD_MEAT: Lang.Category.food_meat,
                    CATEGORY_FOOD_DRINK: Lang.Category.food_drink,
                    CATEGORY_FOOD_OTHERS: Lang.Category.food_others,
                    CATEGORY_ENVIRONMENT_NATURE: Lang.Category.environment_nature,
                    CATEGORY_ENVIRONMENT_SPACE: Lang.Category.environment_space,
                    CATEGORY_ENVIRONMENT_OTHERS: Lang.Category.environment_others,
                    CATEGORY_ENVIRONMENT: Lang.Category.environment,
                    CATEGORY_STUFF: Lang.Category.stuff,
                    CATEGORY_STUFF_LIVING: Lang.Category.stuff_living,
                    CATEGORY_STUFF_HOBBY: Lang.Category.stuff_hobby,
                    CATEGORY_STUFF_OTHERS: Lang.Category.stuff_others,
                    CATEGORY_FANTASY: Lang.Category.fantasy,
                    CATEGORY_INTERFACE: Lang.Category.interface,
                    CATEGORY_BACKGROUND: Lang.Category.background,
                    CATEGORY_BACKGROUND_OUTDOOR: Lang.Category.background_outdoor,
                    CATEGORY_BACKGROUND_INDOOR: Lang.Category.background_indoor,
                    CATEGORY_BACKGROUND_NATURE: Lang.Category.background_nature,
                    CATEGORY_BACKGROUND_OTHERS: Lang.Category.background_others,
                    MENUS_DRAW_NEW_GO: Lang.Menus.draw_new_go,
                    MENUS_DRAW_NEW_STAY: Lang.Menus.draw_new_stay,
                    MENUS_FILE_UPLOAD_DESC_2: Lang.Menus.file_upload_desc_2,
                    MENUS_FILE_UPLOAD_DESC_3: Lang.Menus.file_upload_desc_3,
                    MENUS_FILE_UPLOAD_DESC_4: Lang.Menus.file_upload_desc_4,
                    MENUS_FILE_UPLOAD_DESC_5: Lang.Menus.file_upload_desc_5,
                    WORKSPACE_UPLOAD_ADDFILE: Lang.Workspace.upload_addfile,
                    MENUS_PICTURE_UPLOAD_WARN_1: Lang.Menus.picture_upload_warn_1
                }
        }
        ])
    },
    283: function(e, t) {
        angular.module("mean.entry").controller("SoundController", ["$scope", "$uibModalInstance", "$routeParams", "Global", "$http", "parent", "$filter", function(e, t, n, r, a, o, i) {
            e.global = r,
                e.parent = o,
                e.systemSounds = [],
                e.uploadSounds = [],
                e.isCollapsed1 = !1,
                e.isCollapsed2 = !0,
                e.isCollapsed3 = !0,
                e.isCollapsed4 = !0,
                e.isCollapsed5 = !0,
                e.isCollapsed6 = !0,
                e.main_menu = "사람",
                e.menu = "",
                e.searchWord = "",
                e.dataLoadCallbackApplied = !1,
                e.cursor = 0,
                e.init = function() {
                    n.type = "default",
                        n.main = "사람",
                        $.isPlainObject(o) && o.id ? e.findSoundById(o.id, function(t) {
                            t.selected = "boxOuter selected",
                                e.selectSystem(t),
                                e.dataLoaded = !0,
                                e.applyDataLoadCallback()
                        }) : e.findSounds(n.type, n.main, n.sub)
                }
                ,
                e.applyDataLoadCallback = function() {
                    e.dataLoaded && !e.dataLoadCallbackApplied && o.dataLoadCallback && _.isFunction(o.dataLoadCallback) && (e.dataLoadCallbackApplied = !0,
                        setTimeout(function() {
                            o.dataLoadCallback(),
                                Entry.dispatchEvent("windowResized")
                        }, 200))
                }
                ,
                e.findSoundById = function(t, n) {
                    a.get("/api/sound/" + t).then(function(t) {
                        var r = t.data
                            , a = "https://playentry.org/uploads/" + r.filename.substring(0, 2) + "/" + r.filename.substring(2, 4) + "/" + r.filename + r.ext;
                        Entry.soundQueue.loadFile({
                            id: r._id,
                            src: a,
                            type: createjs.LoadQueue.SOUND
                        }),
                            r.selected = "boxOuter",
                            r.name = i("nameFilter")(r),
                            e.systemSounds.push(r),
                            e.collapse(0),
                            e.main_menu = "",
                            n && n(r)
                    }).catch(function(e) {
                            console.error(e)
                        })
                }
                ,
                e.findSounds = function(t, n, r) {
                    var o = "/api/sound/browse";
                    t || (t = "default"),
                        o += "/" + t,
                        n && (e.main_menu = n,
                            o += "/" + encodeURIComponent(n),
                            r ? (e.menu = r,
                                o += "/" + encodeURIComponent(r)) : e.menu = ""),
                        a({
                            method: "GET",
                            url: o
                        }).success(function(t, n) {
                                for (var r in e.systemSounds = [],
                                    t) {
                                    var a = t[r]
                                        , o = "https://playentry.org/uploads/" + a.filename.substring(0, 2) + "/" + a.filename.substring(2, 4) + "/" + a.filename + a.ext;
                                    for (var s in Entry.soundQueue.loadFile({
                                        id: a._id,
                                        src: o,
                                        type: createjs.LoadQueue.SOUND
                                    }),
                                        a.selected = "boxOuter",
                                        e.selectedSystem)
                                        if (e.selectedSystem[s]._id === a._id) {
                                            a.selected = "boxOuter selected";
                                            break
                                        }
                                    a.name = i("nameFilter")(a),
                                        e.systemSounds.push(a)
                                }
                            }).error(function(t, n) {
                                e.status = n
                            })
                }
                ,
                e.search = function() {
                    if (e.searchWord = $("#searchWord").val(),
                        _.isEmpty(e.searchWord))
                        return entrylms.alert(Lang.Menus.searchword_required),
                            !1;
                    a.get("/api/sound/search/" + e.searchWord.trim()[0]).then(function(t) {
                        var n = t.data
                            , r = e.selectedSystem;
                        e.systemSounds = Entry.Utils.fuzzy.filter(e.searchWord, n, {
                            extract: function(e) {
                                return e.label && e.label[window.lang] ? e.label[window.lang] : e.name
                            }
                        }).map(function(e) {
                                var t = e.original
                                    , n = t._id
                                    , a = t.filename
                                    , o = "https://playentry.org/uploads/" + a.substring(0, 2) + "/" + a.substring(2, 4) + "/" + a + t.ext;
                                Entry.soundQueue.loadFile({
                                    id: t._id,
                                    src: o,
                                    type: createjs.LoadQueue.SOUND
                                });
                                var i = _.find(r, function(e) {
                                    return n === e._id
                                });
                                return t.selected = i ? "boxOuter selected" : "boxOuter",
                                    t
                            }),
                            e.collapse(0),
                            e.main_menu = ""
                    })
                }
                ,
                e.upload = function() {
                    var t = document.getElementById("uploadFile").files;
                    if (!document.getElementById("uploadFile").value)
                        return !1;
                    if (!t)
                        return entrylms.alert(Lang.Menus.file_required),
                            !1;
                    if (t.length > 10)
                        return entrylms.alert(Lang.Menus.file_upload_max_count),
                            !1;
                    for (var n = 0, r = t.length; n < r; n++) {
                        if ((o = t[n]).name.toLowerCase().indexOf(".mp3") < 0)
                            return entrylms.alert(Lang.Workspace.check_audio_msg),
                                document.getElementById("uploadFile").value = "",
                                !1;
                        if (o.size > 10485760)
                            return entrylms.alert(Lang.Menus.file_upload_max_size),
                                document.getElementById("uploadFile").value = "",
                                !1
                    }
                    e.$apply(function() {
                        e.isUploading = !0
                    });
                    var a = new FormData;
                    a.append("type", "user");
                    for (n = 0,
                             r = t.length; n < r; n++) {
                        var o = t[n];
                        a.append("uploadFile" + n, o)
                    }
                    e.uploadSoundFile(a)
                }
                ,
                e.uploadSoundFile = function(t) {
                    $.ajax({
                        url: "/api/sound/upload",
                        data: t,
                        cache: !1,
                        contentType: !1,
                        processData: !1,
                        type: "POST",
                        success: function(t) {
                            e.$apply(function() {
                                e.isUploading = !1,
                                    t.forEach(function(t) {
                                        var n = "https://playentry.org/uploads/" + t.filename.substring(0, 2) + "/" + t.filename.substring(2, 4) + "/" + t.filename + t.ext;
                                        Entry.soundQueue.loadFile({
                                            id: t._id,
                                            src: n,
                                            type: createjs.LoadQueue.SOUND
                                        }),
                                            e.uploadSounds.push(t)
                                    })
                            })
                        },
                        error: function(t) {
                            e.$apply(function() {
                                e.isUploading = !1,
                                    entrylms.alert(Lang.Msgs.error_occured)
                            })
                        }
                    })
                }
                ,
                e.collapse = function(t) {
                    for (var n = 1; n < 10; n++)
                        e["isCollapsed" + n] = !0;
                    t > 0 && (e["isCollapsed" + t] = !1,
                        $("#searchWord").val(""))
                }
                ,
                e.currentTab = "system",
                e.selectedSystem = [],
                e.selectedUpload = [],
                e.selectSystem = function(t) {
                    t.filename.substring(0, 2),
                        t.filename.substring(2, 4),
                        t.filename,
                        t.ext;
                    var n = !0;
                    for (var r in e.selectedSystem) {
                        e.selectedSystem[r]._id === t._id && (e.selectedSystem.splice(r, 1),
                            n = !1)
                    }
                    if (n) {
                        createjs.Sound.play(t._id),
                            e.selectedSystem.push(t);
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter selected")
                        });
                        e.moveContainer("left")
                    } else {
                        createjs.Sound.stop();
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter")
                        });
                        e.moveContainer("right")
                    }
                }
                ,
                e.moveContainer = function(t) {
                    var n = jQuery(".modal_selected_container_moving").eq(0)
                        , r = e.selectedSystem;
                    if ("upload" == e.currentTab && (r = e.selectedUpload),
                        !("left" == t && (r.length - 1 < 5 || e.cursor == r.length - 1) || "right" == t && (0 == e.cursor || r.length < 5 && e.cursor > r.length))) {
                        var a = parseInt(n.css("margin-left"));
                        "left" == t ? (n.css("margin-left", a - 106 + "px"),
                            e.cursor = e.cursor + 1) : (n.css("margin-left", a + 106 + "px"),
                            e.cursor = e.cursor - 1)
                    }
                }
                ,
                e.applySystem = function(n) {
                    e.selectedSystem = [],
                        e.selectedSystem.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                }
                ,
                e.selectUpload = function(t) {
                    t.filename.substring(0, 2),
                        t.filename.substring(2, 4),
                        t.filename,
                        t.ext;
                    var n = !0;
                    for (var r in e.selectedUpload) {
                        e.selectedUpload[r]._id === t._id && (e.selectedUpload.splice(r, 1),
                            n = !1)
                    }
                    if (n) {
                        e.selectedUpload.push(t),
                            createjs.Sound.play(t._id);
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter selected")
                        })
                    } else {
                        createjs.Sound.stop();
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter")
                        })
                    }
                }
                ,
                e.applyUpload = function(n) {
                    e.selectedUpload = [],
                        e.selectedUpload.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                }
                ,
                e.changeTab = function(t) {
                    jQuery(".modal_selected_container_moving").eq(0).css("margin-left", 0),
                        e.currentTab = t
                }
                ,
                e.currentSelected = function() {
                    return "system" === e.currentTab ? (e.selectedSystem.forEach(function(e) {
                        e.name = i("nameFilter")(e)
                    }),
                        e.selectedSystem) : "upload" === e.currentTab ? e.selectedUpload : "textBox" === e.currentTab ? "textBox" : null
                }
                ,
                e.ok = function() {
                    e.currentSelected() ? t.close({
                        target: e.currentTab,
                        data: e.currentSelected()
                    }) : entrylms.alert(Lang.Workspace.select_sprite),
                        createjs.Sound.stop()
                }
                ,
                e.cancel = function() {
                    t.dismiss("cancel"),
                        createjs.Sound.stop()
                }
                ,
                e.dict = {
                    WORKSPACE_SOUND_ADD: Lang.Workspace.sound_add,
                    WORKSPACE_SELECT_SOUND: Lang.Workspace.select_sound,
                    MENUS_PEOPLE: Lang.Menus.people,
                    MENUS_ALL: Lang.Menus.all,
                    MENUS_LIFE: Lang.Menus.life,
                    MENUS_ANIMAL_INSECT: Lang.Menus.animal_insect,
                    MENUS_INSTRUMENT: Lang.Menus.instrument,
                    MENUS_THINGS: Lang.Menus.things,
                    MENUS_VEHICLES: Lang.Menus.vehicles,
                    MENUS_OTHERS: Lang.Menus.others,
                    MENUS_FANTASY: Lang.Menus.fantasy,
                    MENUS_INSTRUMENT: Lang.Menus.instrument,
                    MENUS_PIANO: Lang.Menus.piano,
                    MENUS_MARIMBA: Lang.Menus.marimba,
                    MENUS_DRUM: Lang.Menus.drum,
                    MENUS_JANGGU: Lang.Menus.janggu,
                    MENUS_SOUND_EFFECT: Lang.Menus.sound_effect,
                    MENUS_OTHERS_INSTRUMENT: Lang.Menus.others_instrument,
                    WORKSPACE_UPLOAD: Lang.Workspace.upload,
                    WORKSPACE_UPLOAD_ADDFILE: Lang.Workspace.upload_addfile,
                    BUTTONS_APPLY: Lang.Buttons.apply,
                    BUTTONS_CANCEL: Lang.Buttons.cancel,
                    MENUS_SOUND_UPLOAD_WARN_1: Lang.Menus.sound_upload_warn_1
                }
        }
        ])
    },
    284: function(e, t) {
        angular.module("mean.entry").controller("SpriteController", ["$scope", "$uibModalInstance", "$routeParams", "Global", "$http", "parent", "$filter", "$q", function(e, t, n, r, a, o, i, s) {
            e.global = r,
                e.parent = o,
                e.systemSprites = [],
                e.uploadPictures = [],
                e.showCount = 24,
                e.cursor = 0,
                e.uploadSprite = {},
                e.fonts = Entry.fonts,
                e.status = {
                    isFontOpen: !1
                },
                e.fontData = {
                    font: e.fonts[0],
                    bold: !1,
                    underLine: !1,
                    italic: !1,
                    strike: !1,
                    colour: "#000000",
                    background: "#ffffff",
                    lineBreak: !1
                },
                e.foreground = !1,
                e.background = !1,
                e.fgColor = {
                    "background-color": "#000000"
                },
                e.bgColor = {
                    "background-color": "#ffffff"
                },
                e.linebreak = !1,
                e.main_menu = "entrybot_friends",
                e.menu = "",
                e.searchWord = "",
                e.applyOriginal = !1,
                e.toggleApplyOriginal = function() {
                    e.applyOriginal = !e.applyOriginal;
                    for (var t = e.selectedPictures, n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        e.applyOriginal ? (a.filename = a.origin.filename,
                            a.dimension.width = a.origin.width,
                            a.dimension.height = a.origin.height) : (a.filename = a.trimmed.filename,
                            a.dimension.width = a.trimmed.width,
                            a.dimension.height = a.trimmed.height)
                    }
                }
            ;
            var c = function() {
                var t = $(".tab-right").height()
                    , n = parseInt(t / 148);
                e.showCount = 6 * (n + 1),
                    e.showCount < 24 && (e.showCount = 24)
            };
            e.init = function() {
                n.type = "default",
                    n.main = "entrybot_friends",
                    e.collapse(1),
                    c(),
                    e.systemSprites = e.findSprites(n.type, n.main, n.sub),
                    e.uploadSprite = {
                        name: "",
                        type: "user",
                        pictures: [],
                        sounds: []
                    }
            }
                ,
                e.findSprites = function(t, n, r) {
                    c();
                    var o = "/api/sprite/browse";
                    t || (t = "default"),
                        o += "/" + t,
                        n && (e.main_menu = n,
                            o += "/" + encodeURIComponent(n),
                            r ? (e.menu = r,
                                o += "/" + encodeURIComponent(r)) : e.menu = ""),
                        a({
                            method: "GET",
                            url: o
                        }).success(function(t, n) {
                                for (var r in e.systemSprites = [],
                                    t) {
                                    var a = t[r];
                                    for (var o in a.selected = "boxOuter",
                                        e.selectedSprites)
                                        if (e.selectedSprites[o]._id === a._id) {
                                            a.selected = "boxOuter selected";
                                            break
                                        }
                                    e.systemSprites.push(a)
                                }
                            }).error(function(t, n) {
                                e.status = n
                            })
                }
                ,
                e.search = function() {
                    if (c(),
                        e.searchWord = $("#searchWord").val(),
                        _.isEmpty(e.searchWord))
                        return entrylms.alert(Lang.Menus.searchword_required),
                            !1;
                    a.get("/api/sprite/search/" + e.searchWord.trim()[0]).then(function(t) {
                        var n = t.data
                            , r = e.selectedSprites;
                        e.systemSprites = Entry.Utils.fuzzy.filter(e.searchWord, n, {
                            extract: function(e) {
                                return e.label && e.label[window.lang] ? e.label[window.lang] : e.name
                            }
                        }).map(function(e) {
                                var t = e.original
                                    , n = t._id
                                    , a = _.find(r, function(e) {
                                        return n === e._id
                                    });
                                return t.selected = a ? "boxOuter selected" : "boxOuter",
                                    t
                            }),
                            e.collapse(0),
                            e.main_menu = ""
                    })
                }
                ,
                e.upload = function() {
                    var t = document.getElementById("uploadFile").files;
                    if (!t)
                        return entrylms.alert(Lang.Menus.file_required),
                            !1;
                    if (t.length > 10)
                        return entrylms.alert(Lang.Menus.file_upload_max_count),
                            !1;
                    for (var n = [], r = [], a = 0, o = t.length; a < o; a++) {
                        var i = t[a]
                            , s = /^image\//.test(i.type)
                            , c = /^image\/gif/.test(i.type)
                            , u = /\.eo$/.test(i.name);
                        if (!u && (!s || c))
                            return entrylms.alert(Lang.Workspace.upload_not_supported_file_msg),
                                document.getElementById("uploadFile").value = "",
                                !1;
                        if (i.size > 10485760)
                            return entrylms.alert(Lang.Menus.file_upload_max_size),
                                document.getElementById("uploadFile").value = "",
                                !1;
                        u ? r.push(i) : n.push(i)
                    }
                    t.length > 0 && e.$apply(function() {
                        e.isUploading = !0
                    });
                    var l = null
                        , d = null;
                    for (a = 0,
                             o = n.length; a < o; a++) {
                        i = n[a];
                        l || (l = new FormData).append("type", "user"),
                            l.append("uploadFile" + a, i)
                    }
                    for (a = 0,
                             o = r.length; a < o; a++) {
                        i = r[a];
                        d || (d = new FormData),
                            d.append("objects", i)
                    }
                    e.uploadPictureFile(l, d)
                }
                ,
                e.uploadPictureFile = function(t, n) {
                    var r = s(function(e, n) {
                            if (!t)
                                return e({
                                    data: []
                                });
                            a({
                                method: "POST",
                                url: "/api/picture/upload",
                                data: t,
                                headers: {
                                    "Content-Type": void 0
                                }
                            }).then(e).catch(n)
                        })
                        , o = s(function(e, t) {
                            if (!n)
                                return e({
                                    data: []
                                });
                            a({
                                method: "PUT",
                                url: "/api/importObject",
                                data: n,
                                headers: {
                                    "Content-Type": void 0
                                }
                            }).then(e).catch(t)
                        });
                    s.all([r, o]).then(function(t) {
                        var n = t[0].data
                            , r = t[1].data;
                        e.isUploading = !1,
                            e.uploadPictures || (e.uploadPictures = []),
                            n.forEach(function(t) {
                                e.uploadPictures.push(t)
                            }),
                            r.forEach(function(t) {
                                t.objects.forEach(function(n) {
                                    var r = n.objectType;
                                    if ("textBox" === r) {
                                        var a = n.text
                                            , o = n.entity || {}
                                            , i = n.name
                                            , s = o.font;
                                        _.findIndex(e.fonts, function(e) {
                                            var t = e.family;
                                            return s.indexOf(t) > -1
                                        }),
                                            s.indexOf("bold"),
                                            s.indexOf("italic");
                                        n.selectedPicture = {
                                            name: i,
                                            text: a,
                                            objectType: r,
                                            options: o,
                                            _id: Entry.generateHash(),
                                            sprite: t,
                                            fileurl: "/img/assets/text_icon.png"
                                        }
                                    } else
                                        n.selectedPicture.sprite = t;
                                    e.uploadPictures.push(n.selectedPicture)
                                })
                            }),
                            document.getElementById("uploadFile").value = ""
                    }).catch(function(t) {
                            e.isUploading = !1,
                                entrylms.alert(Lang.Msgs.error_occured),
                                document.getElementById("uploadFile").value = ""
                        })
                }
                ,
                e.collapse = function(t) {
                    for (var n = 1; n <= 12; n++)
                        e["isCollapsed" + n] = !0;
                    t > 0 && (e["isCollapsed" + t] = !1,
                        $("#searchWord").val(""))
                }
                ,
                e.colours = Entry.getColourCodes(),
                e.currentTab = "sprite",
                e.selectedSprites = [],
                e.selectedPictures = [],
                e.selectedColour = "#000000",
                e.applySprite = function(n) {
                    n.name = i("nameFilter")(n),
                        e.selectedSprites = [],
                        e.selectedSprites.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                }
                ,
                e.selectSprite = function(t) {
                    var n = !1;
                    for (var r in e.selectedSprites) {
                        e.selectedSprites[r]._id === t._id && (e.selectedSprites.splice(r, 1),
                            n = !0)
                    }
                    if (n) {
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter")
                        });
                        e.moveContainer("right")
                    } else {
                        e.selectedSprites.push(t);
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter selected")
                        });
                        e.moveContainer("left")
                    }
                }
                ,
                e.moveContainer = function(t) {
                    var n = e.selectedSprites;
                    if ("upload" == e.currentTab && (n = e.selectedPictures),
                        !("left" == t && (n.length - 1 < 5 || e.cursor == n.length - 1) || "right" == t && (0 == e.cursor || n.length < 5 && e.cursor > n.length))) {
                        var r = jQuery(".modal_selected_container_moving").eq(0)
                            , a = parseInt(r.css("margin-left"));
                        "left" == t ? (r.css("margin-left", a - 106 + "px"),
                            e.cursor = e.cursor + 1) : (r.css("margin-left", a + 106 + "px"),
                            e.cursor = e.cursor - 1)
                    }
                }
                ,
                e.applyPicture = function(n) {
                    "textBox" !== n.objectType ? (e.applyOriginal ? (n.filename = n.origin.filename,
                        n.dimension.width = n.origin.width,
                        n.dimension.height = n.origin.height) : (n.filename = n.trimmed.filename,
                        n.dimension.width = n.trimmed.width,
                        n.dimension.height = n.trimmed.height),
                        a.put("/api/picture/" + n._id, n).success(function(r, o) {
                            a.delete("/api/picture/delete/" + n._id),
                                e.selectedPictures = [],
                                e.selectedPictures.push(n),
                                t.close({
                                    target: e.currentTab,
                                    data: e.currentSelected()
                                })
                        })) : (e.selectedPictures = [],
                        e.selectedPictures.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        }))
                }
                ,
                e.selectObject = function(t) {
                    for (var n in e.selectedPictures) {
                        e.selectedPictures[n]._id === t._id && (e.selectedPictures.splice(n, 1),
                            removed = !0)
                    }
                }
                ,
                e.selectPicture = function(t) {
                    var n = !1;
                    for (var r in e.selectedPictures) {
                        e.selectedPictures[r]._id === t._id && (e.selectedPictures.splice(r, 1),
                            n = !0)
                    }
                    if (n) {
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter")
                        });
                        e.moveContainer("right")
                    } else {
                        var a = t;
                        "textBox" !== a.objectType && (e.applyOriginal ? (a.filename = a.origin.filename,
                            a.dimension.width = a.origin.width,
                            a.dimension.height = a.origin.height) : (a.filename = a.trimmed.filename,
                            a.dimension.width = a.trimmed.width,
                            a.dimension.height = a.trimmed.height)),
                            e.selectedPictures.push(a);
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id && e.attr("class", "boxOuter selected")
                        });
                        e.moveContainer("left")
                    }
                }
                ,
                e.changeTab = function(t) {
                    jQuery(".modal_selected_container_moving").eq(0).css("margin-left", 0),
                        e.currentTab = t
                }
                ,
                e.tabs = [{
                    title: "Workspace.select_library",
                    category: "sprite",
                    partial: "/views/workspace/modal/sprite_library.html",
                    active: !0
                }, {
                    title: "Workspace.upload",
                    category: "upload",
                    partial: "/views/workspace/modal/sprite_upload.html"
                }, {
                    title: "Workspace.draw_new",
                    category: "newSprite",
                    partial: "/views/workspace/modal/sprite_draw_new.html"
                }, {
                    title: "Workspace.textbox",
                    category: "textBox",
                    partial: "/views/workspace/modal/sprite_text.html"
                }],
                e.currentSelected = function() {
                    return "sprite" === e.currentTab ? (e.selectedSprites.forEach(function(e) {
                        e.name = i("nameFilter")(e)
                    }),
                        e.selectedSprites) : "upload" === e.currentTab ? (e.selectedPictures.forEach(function(e) {
                        e.name = i("nameFilter")(e)
                    }),
                        e.selectedPictures) : "textBox" === e.currentTab ? "1" : null
                }
                ,
                e.showChoosen = function() {
                    var t = e.currentTab;
                    return !(["textBox", "newSprite"].indexOf(t) > -1)
                }
                ,
                e.changeTextColour = function(t) {
                    e.fontData.colour = t,
                        e.fgColor = {
                            "background-color": t
                        },
                        e.foreground = !1
                }
                ,
                e.changeBackgroundColour = function(t) {
                    e.fontData.background = t,
                        e.bgColor = {
                            "background-color": t
                        },
                        e.background = !1
                }
                ,
                e.changeTextFont = function(t) {
                    u(t.family) ? (e.fontData.font = t,
                        $.each(e.status, function(t, n) {
                            e.status[t] = !1
                        })) : entrylms.alert(Lang.Menus.not_supported_text)
                }
                ,
                e.checkInputText = function(t) {
                    var n = e.fontData.font;
                    if (!u(n.family))
                        return e.changeTextFont(e.fonts[0]),
                            void entrylms.alert(Lang.Menus.not_supported_text)
                }
            ;
            var u = function(t) {
                if ("Nanum Pen Script" == t || "Jeju Hallasan" == t) {
                    var n = jQuery(".modal_textBox").eq(0).val();
                    if (e.linebreak && (n = jQuery(".modal_textBox").eq(1).val()),
                        null != /[\u4E00-\u9FFF]/.exec(n))
                        return !1
                }
                return !0
            };
            e.toggleFontOption = function(t) {
                e.fontData[t] = !e.fontData[t]
            }
                ,
                e.setFontOption = function(t, n) {
                    e.fontData[t] = n
                }
                ,
                e.getFontOption = function(t) {
                    return "/img/assets/text_button_" + t + "_" + e.fontData[t] + ".png"
                }
                ,
                e.getBackgroundColor = function(t) {
                    return "/img/assets/text_button_background_" + e.background + ".png"
                }
                ,
                e.toggleColorChooser = function(t) {
                    "foreground" === t ? (e.foreground = !e.foreground,
                        e.foreground && (e.background = !1)) : "background" === t && (e.background = !e.background,
                        e.background && (e.foreground = !1))
                }
                ,
                e.setLinebreak = function(t) {
                    if (e.linebreak != t)
                        if (e.linebreak = t,
                            e.fontData.lineBreak = t,
                            t) {
                            var n = $(".modal_textBox").eq(0).val();
                            $(".modal_textBox").eq(1).val(n)
                        } else
                            n = $(".modal_textBox").eq(1).val(),
                                $(".modal_textBox").eq(0).val(n)
                }
                ,
                e.ok = function() {
                    if (e.currentSelected())
                        if (1 == e.currentSelected()) {
                            var n = jQuery(".modal_textBox").eq(0).val();
                            e.linebreak && (n = jQuery(".modal_textBox").eq(1).val()),
                                t.close({
                                    target: e.currentTab,
                                    data: n,
                                    options: e.fontData
                                })
                        } else {
                            if ("upload" == e.currentTab)
                                for (var r = e.selectedPictures, o = 0, i = r.length; o < i; o++)
                                    if (!("sprite"in r[o])) {
                                        var s = {
                                            _id: r[o]._id,
                                            filename: r[o].filename,
                                            origin: r[o].origin,
                                            trimmed: r[o].trimmed
                                        };
                                        a.put("/api/picture/" + s._id, s).success(function(e, t) {
                                            a.delete("/api/picture/delete/" + s._id)
                                        })
                                    }
                            t.close({
                                target: e.currentTab,
                                data: e.currentSelected()
                            })
                        }
                    else
                        entrylms.alert(Lang.Workspace.select_sprite)
                }
                ,
                e.cancel = function() {
                    t.dismiss("cancel")
                }
                ,
                e.addNewSprite = function() {
                    t.close({
                        target: "newSprite"
                    })
                }
                ,
                e.loadMore = function() {
                    e.showCount < e.systemSprites.length && (e.showCount += 6)
                }
                ,
                e.dict = {
                    WORKSPACE_ADD_OBJECT: Lang.Workspace.add_object,
                    MENUS_APPLY_ORIGINAL_IMAGE: Lang.Menus.apply_original_image,
                    BUTTONS_APPLY: Lang.Buttons.apply,
                    BUTTONS_CANCEL: Lang.Buttons.cancel,
                    MENUS_PICTURE_UPLOAD_WARN_1: Lang.Menus.picture_upload_warn_1
                }
        }
        ])
    },
    286: function(e, t, n) {
        "use strict";
        angular.module("mean.common").factory("Sprites", ["$resource", function(e) {
            return e("/api/sprite/:spriteId", {
                spriteId: "@_id"
            }, {
                update: {
                    method: "PUT"
                },
                query: {
                    method: "GET",
                    isArray: !0
                }
            })
        }
        ])
    },
    43: function(e, t, n) {
        "use strict";
        var r = angular.module("mean.common");
        r.factory("Projects", ["$resource", function(e) {
            return e("/api/project/:projectId", {
                projectId: "@_id"
            }, {
                update: {
                    method: "PUT"
                },
                get: {
                    method: "GET",
                    cache: !1
                }
            })
        }
        ]),
            r.service("myProject", ["$rootScope", function(e) {
                this.mode,
                    this.modeName,
                    this.projectName,
                    this.setMode = function(t) {
                        this.mode = t,
                            this.modeName = "default" === t ? Lang.Workspace.default_mode : Lang.Workspace.practical_course_mode,
                            e.$broadcast("modeChange", this)
                    }
                    ,
                    this.getMode = function() {
                        return this.mode
                    }
                    ,
                    this.getProjectName = function() {
                        return this.projectName
                    }
                    ,
                    this.setProjectName = function(e) {
                        this.projectName = e
                    }
            }
            ]),
            r.factory("UnloadEmitter", ["$window", "$rootScope", function(e, t) {
                var n = {
                        name: "UnloaderEmitterFactory",
                        willUnload: !1
                    }
                    , r = function() {
                        t.$broadcast("pageLeave"),
                            n.willUnload = !0
                    };
                return e.addEventListener("beforeunload", r),
                    t.$on("$locationChangeStart", r),
                    n
            }
            ]),
            r.service("$download", ["$rootScope", "UnloadEmitter", function(e, t) {
                var n, r, a = {};
                return e.$on("pageLeave", function() {
                    n && (n.onload = null)
                }),
                    a.download = function(e) {
                        var t = navigator.userAgent.toLowerCase();
                        "Netscape" == navigator.appName && -1 != navigator.userAgent.search("Trident") || -1 != t.indexOf("msie") ? (n || ((n = document.createElement("iframe")).style.display = "none",
                            document.body.appendChild(n)),
                            n.setAttribute("src", e),
                            $(n).off("beforeunload").on("beforeunload", function(e) {
                                e.stopPropagation()
                            })) : (r || (r = document.createElement("a"),
                            document.body.appendChild(r)),
                            r.href = e,
                            r.download = e,
                            r.click())
                    }
                    ,
                    a
            }
            ]),
            r.service("$downloadPost", ["$rootScope", "UnloadEmitter", function(e, t) {
                var n = {};
                return n.download = function(e, t) {
                    var n;
                    (n = document.getElementById("$downloadPost")) || ((n = document.createElement("form")).id = "$downloadPost",
                        n.action = e,
                        n.method = "post",
                        n.target = "_self",
                        document.body.appendChild(n));
                    !function(e) {
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild)
                    }(n),
                        Object.keys(t).forEach(function(e) {
                            var r = document.createElement("input");
                            r.type = "hidden",
                                r.name = e;
                            var a = t[e];
                            ($.isPlainObject(a) || Array.isArray(a)) && (a = JSON.stringify(a)),
                                r.value = a,
                                n.appendChild(r)
                        }),
                        n.submit()
                }
                    ,
                    n
            }
            ]),
            r.service("BugReporter", ["$http", "Projects", function(e, t) {
                this.report = function(n, r) {
                    r = r || "workspace bug";
                    var a = this;
                    (n = n || {}).preventDefault && n.preventDefault();
                    var o = $("#bugContent")
                        , i = o.val().trim();
                    if (!i)
                        return entrylms.alert(Lang.Menus.content_required),
                            o.val(""),
                            void o.focus();
                    var s = $("#bugEmail")
                        , c = s.val().trim();
                    if (Entry.type) {
                        (u = Entry.exportProject()).name = $("#project_name").val();
                        var u = new t(u);
                        e.post("/api/feedbackProject", u).success(l).error(function(e, t) {
                            console.log(e),
                                console.log(t),
                                entrylms.alert(Lang.Menus.error_try_again)
                        })
                    } else
                        l();
                    function l(t) {
                        var n = {
                            title: r,
                            content: i,
                            email: c,
                            category: "workspace"
                        };
                        t && (n.project = {
                            _id: t._id,
                            username: "entry"
                        }),
                            e.post("/api/feedback", n).success(function(e, t) {
                                o.val(""),
                                    s.val(""),
                                    entrylms.alert(Lang.Msgs.bug_report_alert_msg),
                                    a.hidePopup("bugReport")
                            }).error(function(e, t) {
                                    console.log(e, t);
                                    var n = Lang.Menus.error_try_again;
                                    429 === t && (n = Lang.Menus.bug_report_too_many_request),
                                        entrylms.alert(n)
                                })
                    }
                }
            }
            ])
    },
    479: function(e, t) {
        angular.module("mean.entry").controller("PictureImportController", ["$scope", "$uibModalInstance", "$routeParams", "Global", "$http", function(e, t, n, r, a) {
            e.global = r,
                e.systemPictures = [],
                e.uploadPictures = [],
                e.main_menu = "entrybot_friends",
                e.menu = "",
                e.init = function() {
                    n.type = "default",
                        n.main = "entrybot_friends",
                        e.collapse(1),
                        e.systemPictures = e.findPictures(n.type, n.main, n.sub)
                }
                ,
                e.findPictures = function(t, n, r) {
                    var o = "/api/picture/browse";
                    t || (t = "default"),
                        o += "/" + t,
                        n && (e.main_menu = n,
                            o += "/" + encodeURIComponent(n),
                            r ? (e.menu = r,
                                o += "/" + encodeURIComponent(r)) : e.menu = ""),
                        a({
                            method: "GET",
                            url: o
                        }).success(function(t, n) {
                                for (var r in e.systemPictures = [],
                                    t) {
                                    var a = t[r];
                                    for (var o in a.selected = "boxOuter",
                                        e.selectedPictures)
                                        if (e.selectedPictures[o]._id === a._id) {
                                            a.selected = "boxOuter selected";
                                            break
                                        }
                                    e.systemPictures.push(a)
                                }
                            }).error(function(t, n) {
                                e.status = n
                            })
                }
                ,
                e.upload = function() {
                    var t = document.getElementById("uploadFile").files;
                    if (!t || 0 === t.length)
                        return entrylms.alert(Lang.Menus.file_required),
                            !1;
                    if (t.length > 10)
                        return entrylms.alert(Lang.Menus.file_upload_max_count),
                            !1;
                    for (var n = 0, r = t.length; n < r; n++) {
                        var a = t[n]
                            , o = /^image\//.test(a.type)
                            , i = /^image\/gif/.test(a.type);
                        if (!o || i)
                            return entrylms.alert(Lang.Workspace.upload_not_supported_file_msg),
                                document.getElementById("uploadFile").value = "",
                                !1;
                        if (a.size > 10485760)
                            return entrylms.alert(Lang.Menus.file_upload_max_size),
                                document.getElementById("uploadFile").value = "",
                                !1
                    }
                    e.isUploading = !0;
                    var s = new FormData;
                    s.append("type", "user");
                    for (n = 0,
                             r = t.length; n < r; n++) {
                        a = t[n];
                        s.append("uploadFile" + n, a)
                    }
                    e.uploadPictureFile(s)
                }
                ,
                e.uploadPictureFile = function(t) {
                    $.ajax({
                        url: "/api/picture/upload",
                        data: t,
                        cache: !1,
                        contentType: !1,
                        processData: !1,
                        type: "POST",
                        success: function(t) {
                            e.isUploading = !1,
                                t && t.length > 0 && e.$apply(function() {
                                    e.uploadPictures || (e.uploadPictures = []),
                                        t.forEach(function(t) {
                                            e.uploadPictures.push(t)
                                        })
                                })
                        }
                    })
                }
                ,
                e.collapse = function(t) {
                    for (var n = 1; n <= 12; n++)
                        e["isCollapsed" + n] = n != t;
                    t > 0 && $("#searchWord").val("")
                }
                ,
                e.currentTab = "system",
                e.selectedPictures = [],
                e.selectedUpload = [],
                e.currentIndex = 0,
                e.applySystem = function(n) {
                    e.selectedPictures = [],
                        e.selectedPictures.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                }
                ,
                e.selectSystem = function(t) {
                    e.selectedPictures.length > 0 && e.selectedPictures[0]._id == t._id || (e.selectedPictures[0] = t,
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id ? e.attr("class", "boxOuter selected") : e.attr("class", "boxOuter")
                        }))
                }
                ,
                e.applyUpload = function(n) {
                    e.selectedUpload = [],
                        e.selectedUpload.push(n),
                        t.close({
                            target: e.currentTab,
                            data: e.currentSelected()
                        })
                }
                ,
                e.selectUpload = function(t) {
                    e.selectedUpload > 0 && e.selectedUpload[0]._id == t._id || (e.selectedUpload[0] = t,
                        jQuery(".boxOuter").each(function() {
                            var e = jQuery(this);
                            e.attr("id") === t._id ? e.attr("class", "boxOuter selected") : e.attr("class", "boxOuter")
                        }))
                }
                ,
                e.changeTab = function(t) {
                    e.currentIndex = 0,
                        jQuery(".modal_selected_container_moving").eq(0).css("margin-left", 0),
                        e.currentTab = t
                }
                ,
                e.moveContainer = function(t) {
                    if (!(e.selectedPictures.length <= 5)) {
                        var n = jQuery(".modal_selected_container_moving").eq(0)
                            , r = e.selectedPictures;
                        if ("left" == t) {
                            if (e.currentIndex + 2 > r.length)
                                return;
                            e.currentIndex++,
                                n.animate({
                                    marginLeft: "-=106px",
                                    duration: "0.2"
                                }, function() {})
                        } else {
                            if (e.currentIndex - 1 < 0)
                                return;
                            e.currentIndex--,
                                n.animate({
                                    marginLeft: "+=106px",
                                    duration: "0.2"
                                }, function() {})
                        }
                    }
                }
                ,
                e.currentSelected = function() {
                    return "system" === e.currentTab ? e.selectedPictures : "upload" === e.currentTab ? e.selectedUpload : "textBox" === e.currentTab ? "textBox" : null
                }
                ,
                e.ok = function() {
                    e.currentSelected() ? t.close({
                        target: e.currentTab,
                        data: e.currentSelected()
                    }) : entrylms.alert(Lang.Workspace.select_sprite)
                }
                ,
                e.cancel = function() {
                    t.dismiss("cancel")
                }
                ,
                e.addNewPicture = function() {
                    t.close({
                        target: "new"
                    })
                }
                ,
                e.dict = {
                    MENUS_PICTURE_IMPORT: Lang.Menus.picture_import,
                    MENUS_PICTURE_SELECT: Lang.Menus.picture_select,
                    WORKSPACE_UPLOAD: Lang.Workspace.upload,
                    WORKSPACE_UPLOAD_ADDFILE: Lang.Workspace.upload_addfile
                }
        }
        ])
    },
    482: function(e, t) {
        !function(e, t, n) {
            "use strict";
            t.module("ui.sortable", []).value("uiSortableConfig", {}).directive("uiSortable", ["uiSortableConfig", "$timeout", "$log", function(e, r, a) {
                return {
                    require: "?ngModel",
                    scope: {
                        ngModel: "=",
                        uiSortable: "="
                    },
                    link: function(o, i, s, c) {
                        function u(e, t) {
                            return t && "function" == typeof t ? function() {
                                e.apply(this, arguments),
                                    t.apply(this, arguments)
                            }
                                : e
                        }
                        function l(e) {
                            var t = e.data("ui-sortable");
                            return t && "object" == typeof t && "ui-sortable" === t.widgetFullName ? t : null
                        }
                        function d(e, t) {
                            var n = e.sortable("option", "helper");
                            return "clone" === n || "function" == typeof n && t.item.sortable.isCustomHelperUsed()
                        }
                        function p(e, t) {
                            t.item.sortable._destroy()
                        }
                        var m, g = {}, f = {
                            "ui-floating": n
                        }, y = {
                            receive: null,
                            remove: null,
                            start: null,
                            stop: null,
                            update: null
                        }, h = {
                            helper: null
                        };
                        return t.extend(g, f, e, o.uiSortable),
                            t.element.fn && t.element.fn.jquery ? (c ? (o.$watch("ngModel.length", function() {
                                r(function() {
                                    l(i) && i.sortable("refresh")
                                }, 0, !1)
                            }),
                                y.start = function(e, r) {
                                    if ("auto" === g["ui-floating"]) {
                                        var a = r.item.siblings();
                                        l(t.element(e.target)).floating = function(e) {
                                            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
                                        }(a)
                                    }
                                    r.item.sortable = {
                                        model: c.$modelValue[r.item.index()],
                                        index: r.item.index(),
                                        source: r.item.parent(),
                                        sourceModel: c.$modelValue,
                                        cancel: function() {
                                            r.item.sortable._isCanceled = !0
                                        },
                                        isCanceled: function() {
                                            return r.item.sortable._isCanceled
                                        },
                                        isCustomHelperUsed: function() {
                                            return !!r.item.sortable._isCustomHelperUsed
                                        },
                                        _isCanceled: !1,
                                        _isCustomHelperUsed: r.item.sortable._isCustomHelperUsed,
                                        _destroy: function() {
                                            t.forEach(r.item.sortable, function(e, t) {
                                                r.item.sortable[t] = n
                                            })
                                        }
                                    }
                                }
                                ,
                                y.activate = function(e, n) {
                                    m = i.contents();
                                    var r = i.sortable("option", "placeholder");
                                    if (r && r.element && "function" == typeof r.element) {
                                        var a = r.element();
                                        a = t.element(a);
                                        var s = i.find('[class="' + a.attr("class") + '"]:not([ng-repeat], [data-ng-repeat])');
                                        m = m.not(s)
                                    }
                                    var c = n.item.sortable._connectedSortables || [];
                                    c.push({
                                        element: i,
                                        scope: o
                                    }),
                                        n.item.sortable._connectedSortables = c
                                }
                                ,
                                y.update = function(e, t) {
                                    if (!t.item.sortable.received) {
                                        t.item.sortable.dropindex = t.item.index();
                                        var n = t.item.parent();
                                        t.item.sortable.droptarget = n;
                                        var r = function(e, t) {
                                            for (var n = null, r = 0; r < e.length; r++) {
                                                var a = e[r];
                                                if (a.element[0] === t[0]) {
                                                    n = a.scope;
                                                    break
                                                }
                                            }
                                            return n
                                        }(t.item.sortable._connectedSortables, n);
                                        t.item.sortable.droptargetModel = r.ngModel,
                                            i.sortable("cancel")
                                    }
                                    d(i, t) && !t.item.sortable.received && "parent" === i.sortable("option", "appendTo") && (m = m.not(m.last())),
                                        m.appendTo(i),
                                        t.item.sortable.received && (m = null),
                                        t.item.sortable.received && !t.item.sortable.isCanceled() && o.$apply(function() {
                                            c.$modelValue.splice(t.item.sortable.dropindex, 0, t.item.sortable.moved)
                                        })
                                }
                                ,
                                y.stop = function(e, t) {
                                    !t.item.sortable.received && "dropindex"in t.item.sortable && !t.item.sortable.isCanceled() ? o.$apply(function() {
                                        c.$modelValue.splice(t.item.sortable.dropindex, 0, c.$modelValue.splice(t.item.sortable.index, 1)[0])
                                    }) : "dropindex"in t.item.sortable && !t.item.sortable.isCanceled() || d(i, t) || m.appendTo(i),
                                        m = null
                                }
                                ,
                                y.receive = function(e, t) {
                                    t.item.sortable.received = !0
                                }
                                ,
                                y.remove = function(e, t) {
                                    "dropindex"in t.item.sortable || (i.sortable("cancel"),
                                        t.item.sortable.cancel()),
                                        t.item.sortable.isCanceled() || o.$apply(function() {
                                            t.item.sortable.moved = c.$modelValue.splice(t.item.sortable.index, 1)[0]
                                        })
                                }
                                ,
                                h.helper = function(e) {
                                    return e && "function" == typeof e ? function(t, n) {
                                        var r = e.apply(this, arguments);
                                        return n.sortable._isCustomHelperUsed = n !== r,
                                            r
                                    }
                                        : e
                                }
                                ,
                                o.$watch("uiSortable", function(e) {
                                    var n = l(i);
                                    n && t.forEach(e, function(e, t) {
                                        return t in f ? ("ui-floating" !== t || !1 !== e && !0 !== e || (n.floating = e),
                                            void (g[t] = e)) : (y[t] ? ("stop" === t && (e = u(e = u(e, function() {
                                            o.$apply()
                                        }), p)),
                                            e = u(y[t], e)) : h[t] && (e = h[t](e)),
                                            g[t] = e,
                                            void i.sortable("option", t, e))
                                    })
                                }, !0),
                                t.forEach(y, function(e, t) {
                                    g[t] = u(e, g[t]),
                                        "stop" === t && (g[t] = u(g[t], p))
                                })) : a.info("ui.sortable: ngModel not provided!", i),
                                void i.sortable(g)) : void a.error("ui.sortable: jQuery should be included before AngularJS!")
                    }
                }
            }
            ])
        }(window, window.angular)
    },
    621: function(e, t) {
        angular.module("mean.entry").controller("PdfController", ["$scope", "$uibModalInstance", "$routeParams", "Global", "$sce", "url", function(e, t, n, r, a, o) {
            e.global = r,
                e.url = "/pdfjs/web/viewer_modal.html?file=" + o,
                e.init = function() {
                    $("#pdfFrame").attr("src", e.url)
                }
                ,
                e.cancel = function() {
                    t.dismiss("cancel")
                }
        }
        ])
    },
    961: function(e, t, n) {
        "use strict";
        var r = angular.module("mean.course");
        r.factory("shareSet", function() {
            return {
                studyIndex: 0,
                studyStatus: [],
                lecture: {},
                homework: {},
                isHomeworkLapse: !1,
                userProject: "",
                isLastStudy: !1
            }
        }),

        r.controller("CourseController", ["$scope", "$route", "$routeParams", "$uibModal", "$http", "$location", "$log", "$q", "Global", "Sprites", "myProject", "Projects", "shareSet", function(e, t, n, r, a, o, i, s, c, u, l, d, p) {
                // 14个函数
                function m(t, n) {
                    n || (n = 0),
                        e.shareSet.lecture.studies.forEach(function(r, a) {
                            var o;
                            if (n === a || "all" === n) {
                                var i = e.shareSet.studyStatus[a] ? e.shareSet.studyStatus[a].status : "BASIC";
                                o = !i || e.priorityStatus[i] < e.priorityStatus[t] ? t : i
                            } else
                                o = "SUBMITTED" === t && a < n ? "SUBMITTED" : e.shareSet.studyStatus[a] ? e.shareSet.studyStatus[a].status : "BASIC";
                            var s = {
                                category: r.type,
                                status: o
                            };
                            $.isPlainObject(e.shareSet.studyStatus[a]) ? $.extend(e.shareSet.studyStatus[a], s) : e.shareSet.studyStatus[a] = s
                        })
                }

                function g(t, n, r, o) {
                    if (e.lectureId && window.user && !e.teacherMode) {
                        m(t, n);
                        var i = e.shareSet.studyStatus.concat();
                        $.extend(i[n], r);
                        var s = {
                            type: "open",
                            lectureId: e.lectureId,
                            studyStatus: i,
                            status: t,
                            index: n,
                            category: r ? r.category : ""
                        };
                        e.groupId && (s.groupId = e.groupId),
                            e.studentId && (s.studentId = e.studentId),
                            e.shareSet.lecture.curriculum && (s.curriculum = e.shareSet.lecture.curriculum),
                            a.post("https://playentry.org/api/lecture/progress", s).then(function(t) {
                                if (e.shareSet.studyStatus = t.data.studyStatus,
                                    o) {
                                    var n = e.project && e.project._id;
                                    o(n)
                                }
                            }).catch(function(e, t) {
                                    console.log(e)
                                })
                    } else if (m(t, n),
                        sessionStorage.setItem("cs_" + e.lectureId, JSON.stringify(e.shareSet.studyStatus)),
                        o) {
                        var c = e.project && e.project._id;
                        o(c, !0)
                    }
                }

                //获取课程的初始数据
                function f() {
                    if (e.lectureId)
                        a.get("builds/init_data.json").success(function(t) {
                            if (e.shareSet.lecture = t,
                                e.shareSet.studyStatus = [],
                                t.studies) {
                                e.isMazeMode = t.studies.every(function(e) {
                                    return e.type.indexOf("maze") > -1
                                });
                                var n = {};
                                if (e.shareSet.lecture.curriculum && (n.curriculum = e.shareSet.lecture.curriculum),
                                    e.isAuth) {
                                    if (e.teacherMode)
                                        var r = e.currentStudent.user || e.currentStudent.studentUser;
                                    else
                                        r = window.user._id;
                                    n.user = r,
                                        e.teacherMode && (n.teacherMode = !0),
                                        e.groupId && (n.groupId = e.groupId),
                                        e.studentId && (e.teacherMode ? n.studentId = e.currentStudent._id : n.studentId = e.studentId),
                                        a.post("https://playentry.org/api/lecture/progress/" + e.lectureId, n).then(function(e) {
                                            y(e.data)
                                        }, function() {
                                            h(t)
                                        })
                                } else if (e.teacherMode)
                                    h(t);
                                else {
                                    var o = sessionStorage.getItem("cs_" + e.lectureId);
                                    if (o)
                                        y(JSON.parse(o));
                                    else
                                        h(t)
                                }
                            }
                            a.get("https://playentry.org/api/lecture/visit/" + e.lectureId)
                        });
                    else {
                        var t = JSON.parse(sessionStorage.getItem("instanceCourseData"));
                        e.shareSet.lecture = t,
                            e.shareSet.studyStatus = [],
                            e.shareSet.studyStatus = t.studies.map(function() {
                                return {
                                    status: "BASIC"
                                }
                            }),
                            e.shareSet.studyIndex = 0,
                            e.initEntryLms(!0)
                    }
                }
                function y(t) {
                    e.shareSet.studyStatus = t;
                    var n, r = 0, a = e.shareSet.studyStatus, o = a.length - 1;
                    e.isHomework ? r = e.teacherMode ? !a[o] || "SUBMITTED" !== a[o].status && "COMPLETED" !== a[o].status ? _(a) + 1 : "free" == a[o].category ? o : function(e) {
                        var t = 0;
                        e.map(function(e, n) {
                            "quiz" === e.category && (t = n)
                        });
                        return 0 === t ? e.length - 1 : t
                    }(a) : 0 === a.length ? 0 : !a[o] || "SUBMITTED" !== a[o].status && "COMPLETED" !== a[o].status ? _(a) + 1 : o : (t.length ? n = t.some(function(e, t, n) {
                        return "PROGRESS" == e.status ? (r = t,
                            !0) : "BASIC" == e.status && (r = t,
                            !0)
                    }) : (n = !0,
                        r = 0),
                        n || (r = e.studyIndex || 0),
                        e.studyIndex || !a[o] || "SUBMITTED" !== a[o].status && "COMPLETED" !== a[o].status || (r = o));
                    void 0 == e.studyIndex || r < e.studyIndex ? e.shareSet.studyIndex = r : e.studyIndex ? e.shareSet.studyIndex = e.studyIndex : e.shareSet.studyIndex = 0,
                        0 === e.shareSet.studyIndex && g("PROGRESS"),
                        e.initEntryLms(!0)
                }
                function h(t) {
                    e.shareSet.studyStatus = t.studies.map(function() {
                        return {
                            status: "BASIC"
                        }
                    }),
                        e.shareSet.studyIndex = 0,
                        e.initEntryLms(!0)
                }
                function _(e) {
                    var t = -1;
                    e.map(function(e, n) {
                        "SUBMITTED" !== e.status && "COMPLETED" !== e.status || (t = n)
                    });
                    return t
                }
                function v(e) {
                    var t = $.Deferred()
                        , n = [];
                    if ("string" == typeof e.basicProject && n.push({
                        key: "basicProject",
                        data: e.basicProject
                    }),
                        "string" == typeof e.doneProject && n.push({
                            key: "doneProject",
                            data: e.doneProject
                        }),
                        n.length) {
                        var r = 0;
                        n.forEach(function(o) {
                            !function(o) {
                                a.get("/api/project/" + o.data).then(function(a) {
                                    e[o.key] = a.data,
                                        ++r === n.length && t.resolve(e)
                                }).catch(function(e) {
                                        t.reject(e)
                                    })
                            }(o)
                        })
                    } else
                        t.resolve(e);
                    return t
                }
                function b(t, n) {
                    t.isHomework = e.isHomework,
                        t.isHomeworkLapse = p.isHomeworkLapse,
                        t.isLastStudy = p.isLastStudy,
                        t.isNew = e.isNew;
                    var r = p.studyIndex
                        , a = p.studyStatus;
                    if (a && r in a) {
                        var o = a[r].value;
                        e.teacherMode && o.submitData && (o = o.submitData),
                            $.extend(t, o)
                    }
                    var i = {
                        objectEditable: !1,
                        pictureeditable: !1,
                        soundeditable: !1,
                        sceneEditable: !1,
                        messageEnable: !1,
                        variableEnable: !1,
                        listEnable: !1,
                        functionEnable: !1,
                        freezingVariable: !1,
                        lockBasicBlocks: !1
                    };
                    for (var s in i)
                        i[s] = t.injectOption[s] || !1;
                    if (t.injectOption = i,
                        t.isMazeMode = e.isMazeMode,
                        n) {
                        var c = e.shareSet.lecture.studies.length;
                        p.isLastStudy = c - 1 == p.studyIndex,
                            t.isLastStudy = p.isLastStudy,
                            entrylms.init({
                                mode: t.type,
                                target: "container",
                                data: t
                            }),
                            Entry.addEventListener("openSpriteManager", e.openSpriteManager),
                            Entry.addEventListener("openPictureManager", e.openPictureManager),
                            Entry.addEventListener("openSoundManager", e.openSoundManager),
                            Entry.addEventListener("dismissModal", e.dismissModal),
                            Entry.addEventListener("saveCanvasImage", e.saveCanvasData),
                            Entry.addEventListener("openPictureImport", e.openPictureImport)
                    } else {
                        var u = $.extend({}, t, {
                            reset: !0
                        });
                        u.isNew = e.isNew,
                            entrylms.setMode(u.type, u)
                    }
                    setTimeout(function() {
                        e.popupHelper && e.popupHelper.hide()
                    }, 300)
                }
                function S() {
                    e.isSaving = !0;
                    var t = e.shareSet.lecture.studies[e.shareSet.studyIndex]
                        , n = function() {
                            var t = {};
                            return t._id = angular.copy(e.project._id),
                                t.name = angular.copy(e.project.name),
                                t.created = angular.copy(e.project.created),
                                t.updated = angular.copy(e.project.updated),
                                t.comment = angular.copy(e.project.comment),
                                t.like = angular.copy(e.project.like),
                                t.shortenUrl = angular.copy(e.project.shortenUrl),
                                t.likeCnt = angular.copy(e.project.likeCnt),
                                t.visit = angular.copy(e.project.visit),
                                t.isopen = angular.copy(e.project.isopen),
                                t.user = angular.copy(e.project.user),
                                t.isForLecture = angular.copy(e.project.isForLecture),
                                t
                        }();
                    e.project._id ? e.project.parent = e.project._id : t && t.basicProject && (e.project.parent = t.basicProject._id),
                        delete e.project._id,
                        delete e.project.created,
                        delete e.project.updated,
                        delete e.project.comment,
                        delete e.project.like,
                        delete e.project.shortenUrl,
                        e.project.likeCnt = 0,
                        e.project.visit = 0,
                        e.project.isopen = !1,
                        e.project.user = c.user._id,
                        e.project.isForLecture = !1,
                        e.project.isForStudy = !1,
                        e.project && e.project.group && (e.project.group = []),
                        Entry.stage.handle.setVisible(!1),
                        Entry.stage.update(),
                        e.project.name = document.getElementById("project_name").value,
                        L(e.project),
                        a.post("https://playentry.org/api/project", e.project).success(function(t) {
                            a.post("https://playentry.org/api/project/thumbnail/" + t._id, {
                                thumbnail: P()
                            }).success(function() {
                                    var r;
                                    Entry.toast.success(Lang.Workspace.saved, t.name + " " + Lang.Workspace.saved_msg),
                                        r = n,
                                        e.project._id = angular.copy(r._id),
                                        e.project.name = angular.copy(r.name),
                                        e.project.created = angular.copy(r.created),
                                        e.project.update = angular.copy(r.updated),
                                        e.project.comment = angular.copy(r.comment),
                                        e.project.like = angular.copy(r.like),
                                        e.project.shortenUrl = angular.copy(r.shortenUrl),
                                        e.project.likeCnt = angular.copy(r.likeCnt),
                                        e.project.visit = angular.copy(r.visit),
                                        e.project.isopen = angular.copy(r.isopen),
                                        e.project.user = angular.copy(r.user),
                                        e.project.isForLecture = angular.copy(r.isForLecture),
                                        e.isSaving = !1
                                })
                        })
                }
                function E(t) {
                    e.isSaving = !0;
                    var n = e.shareSet.lecture
                        , r = n.studies[e.shareSet.studyIndex];
                    Entry.stage.handle.visible = !1,
                        Entry.stage.update(),
                        e.project._id || (r.basicProject && (e.project.parent = r.basicProject._id),
                            delete e.project.created,
                            delete e.project.updated,
                            delete e.project.comment,
                            delete e.project.like,
                            delete e.project.shortenUrl,
                            e.project.likeCnt = 0,
                            e.project.visit = 0,
                            e.project.isopen = !1,
                            e.project.isForLecture = !0,
                            e.project.user = user._id,
                            e.project.lecture = n._id,
                            e.project.study = r._id,
                            e.project.isForStudy = !1),
                        e.project.name = e.project.name || document.getElementById("project_name").value,
                        L(e.project),
                        e.project._id ? e.project.$update(function(r) {
                            e.project._id = r._id,
                                p.userProject = r._id,
                                a.post("https://playentry.org/api/project/thumbnail/" + r._id, {
                                    thumbnail: P()
                                }).then(function() {
                                        e.isHomework ? e.saveHomework(n._id).then(function(e) {
                                            t && t(r._id)
                                        }, function(e) {}) : t && t(r._id),
                                            Entry.toast.success(Lang.Workspace.saved, r.name + " " + Lang.Workspace.saved_msg),
                                            e.isSaving = !1
                                    }, function() {
                                        alert(Lang.Msgs.error_occured),
                                            e.isSaving = !1
                                    })
                        }) : e.project.$save(function(r) {
                            e.project._id = r._id,
                                a.post("https://playentry.org/api/project/thumbnail/" + r._id, {
                                    thumbnail: P()
                                }).then(function() {
                                        e.isHomework ? e.saveHomework(n._id).then(function(e) {
                                            t && t(r._id)
                                        }, function(e) {
                                            console.log("error:", e)
                                        }) : t && t(r._id),
                                            Entry.toast.success(Lang.Workspace.saved, r.name + " " + Lang.Workspace.saved_msg),
                                            e.isSaving = !1
                                    }, function() {
                                        alert(Lang.Msgs.error_occured),
                                            e.isSaving = !1
                                    })
                        })
                }
                function w(t) {
                    var n = e.shareSet.lecture
                        , r = n.studies[e.shareSet.studyIndex];
                    Entry.stage.handle.visible = !1,
                        Entry.stage.update(),
                        e.submitProject._id || (r.basicProject && (e.submitProject.parent = r.basicProject._id),
                            delete e.submitProject.created,
                            delete e.submitProject.updated,
                            delete e.submitProject.comment,
                            delete e.submitProject.like,
                            delete e.submitProject.shortenUrl,
                            e.submitProject.likeCnt = 0,
                            e.submitProject.visit = 0,
                            e.submitProject.isopen = !1,
                            e.submitProject.isForLecture = !0,
                            e.submitProject.user = c.user._id,
                            e.submitProject.lecture = n._id,
                            e.submitProject.study = r._id,
                            e.submitProject.isForStudy = !1,
                            e.submitProject.isForSubmit = !0),
                        e.submitProject.name = e.submitProject.name || document.getElementById("project_name").value,
                        L(e.submitProject),
                        e.submitProject._id ? e.submitProject.$update(function(e) {
                            t && t(e._id)
                        }) : e.submitProject.$save(function(e) {
                            t && t(e._id)
                        })
                }
                function j() {
                    var t = !0;
                    return e.isSaving && (t = !1),
                        Entry.engine.isState("stop") || (Entry.toast.alert(Lang.Msgs.warn, Lang.Workspace.cannot_save_running_project),
                            t = !1),
                        Entry.Func && Entry.Func.workspace && Entry.Func.workspace.visible && (Entry.toast.alert(Lang.Msgs.warn, "함수 편집중에는 저장할 수 없습니다."),
                            t = !1),
                        t
                }
                function L(e) {
                    e || (e = new d({})),
                        e.objects = Entry.container.toJSON(),
                        e.scenes = Entry.scene.toJSON(),
                        e.variables = Entry.variableContainer.getVariableJSON(),
                        e.messages = Entry.variableContainer.getMessageJSON(),
                        e.functions = Entry.variableContainer.getFunctionJSON(),
                        e.scenes = Entry.scene.toJSON(),
                        e.speed = Entry.FPS
                }
                function I(e) {
                    var t = e || document.location.search;
                    return t.length ? t.replace(/(^\?)/, "").split("&").map(function(e) {
                        return this[(e = e.split("="))[0]] = e[1],
                            this
                    }
                        .bind({}))[0] : {}
                }

                e.shareSet = p,
                e.popupHelper || (e.popupHelper = new Entry.popupHelper(!0),
                e.popupHelper.addClass("entryCourse")),
                e.popupHelper.addPopup("workspaceSpinner", {
                        type: "spinner",
                        setPopupLayout: function(e) {
                            var t = Entry.Dom("div", {
                                class: "contentArea"
                            });
                            Entry.Dom("div", {
                                class: "workspaceSpinnerTitle2",
                                id: "progress",
                                parent: t
                            }),
                                e.append(t)
                        }
                    }, "entryCourse"),

                e.initWorkspace = function() {
                        e.isGroupOwner = c.isGroupOwner(),
                            e.lectureId = n.lectureId,
                            (n.studyIndex || 0 == n.studyIndex) && (e.studyIndex = Number(n.studyIndex)),
                            e.groupId = n.groupId,
                            e.studentId = n.studentId,
                            e.homeworkId = n.homeworkId,
                            e.tempGroup = null,
                            e.isAuth = c.authenticated,
                            e.groupId && e.studentId ? a.get("https://playentry.org/api/group/" + e.groupId).success(function(t) {
                                e.currentGroup = t,
                                    e.isGroupOwner = c.isGroupOwner(t),
                                    e.homeworkId && (e.isHomework = !0),
                                    e.isGroupOwner ? e.studentId && (e.teacherMode = !0,
                                        a.get("https://playentry.org/api/student/" + e.studentId).success(function(t) {
                                            e.currentStudent = t,
                                                f()
                                        })) : a.get("https://playentry.org/api/student/group/" + e.groupId).success(function(n) {
                                        n && (e.currentStudent = n),
                                            e.isHomework && t.homeworks.map(function(t) {
                                                if (t.id == e.homeworkId)
                                                    if (t.submissions.length > 1) {
                                                        var n = !1;
                                                        t.submissions.map(function(t) {
                                                            t.student === e.studentId && (n = !0),
                                                                n || e.saveHomework(e.lectureId)
                                                        })
                                                    } else
                                                        e.saveHomework(e.lectureId)
                                            }),
                                            f()
                                    })
                            }) : f()
                    },
                e.priorityStatus = {
                        BASIC: 0,
                        PROGRESS: 1,
                        COMPLETED: 2,
                        SUBMITTED: 3,
                        RESOLVED: 4
                    },
                e.initEntryLms = function(t) {
                        1 === e.shareSet.lecture.studies.length ? $(document.body).addClass("monoWS") : document.body.className = "";
                        var n = I();
                        if ("true" === n.isCodingParty) {
                            $(document.body).addClass("codingParty");
                            var r = "http://playsw.or.kr/party17s";
                            "party17f" === n.season && (r = "http://playsw.or.kr/party17f");
                            var o = $('<div class="codingPartyLogo"><a href="' + r + '"><img src="/img/assets/codingparty/ocp_logo_w.png"/></a></div>');
                            $("body").append(o)
                        }
                 e.popupHelper.show("workspaceSpinner");
                        var i = e.shareSet.lecture.studies[e.shareSet.studyIndex];
                        i.parentTitle = e.shareSet.lecture.title,
                            v(i).done(function(n) {
                                var r;
                                if (e.isNew = !0,
                                    e.teacherMode) {
                                    var o = e.currentStudent;
                                    r = o.user ? o.user : o.studentUser
                                } else
                                    r = window.user ? window.user._id : null;
                                r ? a.get("https://playentry.org/api/project/studylectures/" + e.lectureId + "/" + i._id + "/" + r).then(function(r) {
                                    e.isNew = !1;
                                    var a = r.data || {}
                                        , o = a.userProject || {};
                                    e.teacherMode && e.isHomework && ($.isEmptyObject(a.submitProject) ? ("COMPLETED" != e.shareSet.studyStatus[e.shareSet.studyIndex].status || $.isEmptyObject(o)) && delete (o = n.basicProject)._id : o = a.submitProject);
                                    var i = angular.copy(n);
                                    i.basicProject = o,
                                        b(i, t),
                                        e.project = new d(i.basicProject),
                                        e.submitProject = new d(a.submitProject)
                                }, function(r) {
                                    b(n, t),
                                        n.basicProject && (e.project = new d(n.basicProject),
                                            e.submitProject = new d,
                                            delete e.project._id)
                                }) : (b(n, t),
                                    n.basicProject && (e.project = new d(n.basicProject),
                                        e.submitProject = new d,
                                        delete e.project._id))
                            }),
                            t && (entrylms.off("ExitStudy"),
                                entrylms.on("ExitStudy", function(t, n) {
                                    k(),
                                        g("COMPLETED", p.studyIndex, t, function(r, a) {
                                            t && "quiz" === t.category || ++e.shareSet.studyIndex,
                                                a && e.$apply(),
                                                n && n()
                                        })
                                }),
                                entrylms.off("SubmitStudy"),
                                entrylms.on("SubmitStudy", function(t, n) {
                                    p.isLastStudy ? (k(),
                                        function(t, n) {
                                            var r = e.currentStudent
                                                , o = r._id
                                                , i = r.studentName ? r.studentName : r.username
                                                , s = "https://playentry.org/api/group/homework/submit/" + e.groupId
                                                , c = {
                                                    id: e.homeworkId,
                                                    lecture: e.lectureId,
                                                    student: o,
                                                    name: i,
                                                    submitted: !0
                                                };
                                            a.put(s, c).success(function(r) {
                                                g("SUBMITTED", e.shareSet.studyIndex, t, n)
                                            }).error(function(e) {
                                                    console.log("error:", e)
                                                })
                                        }(t, function(r, a) {
                                            t && "quiz" === t.category || ++e.shareSet.studyIndex,
                                                a && e.$apply(),
                                                n && n()
                                        })) : g("SUBMITTED", e.shareSet.studyIndex, t, function(r, a) {
                                        t && "quiz" === t.category || ++e.shareSet.studyIndex,
                                            a && e.$apply(),
                                            n && n()
                                    })
                                }),
                                entrylms.off("NextStudy"),
                                entrylms.on("NextStudy", function(t, n) {
                                    ++e.shareSet.studyIndex,
                                        e.$apply()
                                }),
                                entrylms.off("saveWorkspace"),
                                entrylms.off("saveAsWorkspace"),
                                entrylms.off("resetWorkspace"),
                                entrylms.on("saveWorkspace", e.saveWorkspace),
                                entrylms.on("saveWorkspaceBySubmit", e.saveWorkspaceBySubmit),
                                entrylms.on("saveAsWorkspace", e.saveAsWorkspace),
                                entrylms.on("resetWorkspace", e.resetWorkspace),
                                e.isHomework && entrylms.emit("saveWorkspace"))
                    },
                e.saveHomework = function(t) {
                        var n = s.defer()
                            , r = "https://playentry.org/api/group/homework/submit/" + e.groupId
                            , o = {
                                id: e.homeworkId,
                                lecture: t,
                                student: e.studentId,
                                name: e.currentStudent.studentName ? e.currentStudent.studentName : window.user.username
                            };
                        return a.put(r, o).success(function(e) {
                            n.resolve(e)
                        }).error(function(e) {
                                console.log("err=", e),
                                    n.reject(e)
                            }),
                            n.promise
                    },
                e.resetWorkspace = function() {
                        e.popupHelper.show("workspaceSpinner");
                        var t = e.shareSet.lecture.studies[e.shareSet.studyIndex];
                        t.parentTitle = e.shareSet.lecture.title,
                            e.isNew = !0,
                            v(t).done(function(n) {
                                n.isReset = !0;
                                var r = window.user ? window.user._id : null;
                                n.basicProject && console.log("basic=", n.basicProject._id),
                                    a.get("https://playentry.org/api/project/studylecture/" + e.lectureId + "/" + t._id + "/" + r).then(function(t) {
                                        t.data;
                                        n.basicProject && (e.project.objects = angular.copy(n.basicProject.objects),
                                            e.submitProject.objects = angular.copy(n.basicProject.objects)),
                                            b(n, !1)
                                    }, function(t) {
                                        b(n, !1),
                                            n.basicProject && (e.project = new d(n.basicProject),
                                                e.submitProject = new d,
                                                delete e.project._id)
                                    })
                            })
                    },
                e.saveAsWorkspace = function() {
                        e.project && (j() && (Entry.playground.painter.file.modified ? entrylms.confirm(Lang.Workspace.SaveWithPicture).then(function(e) {
                            1 == e ? Entry.playground.painter.file_save({
                                cmd: "saveAs"
                            }) : S()
                        }) : S()))
                    },
                e.saveWorkspace = function(t) {
                        if (e.project) {
                            var n = c.user;
                            n && n._id && j() ? Entry.playground.painter.file.modified ? entrylms.confirm(Lang.Workspace.SaveWithPicture).then(function(e) {
                                1 == e ? Entry.playground.painter.file_save({
                                    cmd: "save",
                                    callback: t
                                }) : E(t)
                            }) : E(t) : t && t()
                        }
                    },
                e.saveWorkspaceBySubmit = function(e) {
                        Entry.playground.painter.file.modified ? entrylms.confirm(Lang.Workspace.SaveWithPicture).then(function(t) {
                            1 == t ? Entry.playground.painter.file_save({
                                cmd: "saveSubmit",
                                callback: e
                            }) : w(e)
                        }) : w(e)
                    },
                e.$on("$locationChangeSuccess", function(e, t, n) {
                        window.location.reload()
                    }),
                e.$watch("shareSet.studyIndex", function(t, n) {
                        if (entrylms.isInitialize && t !== n && e.shareSet.lecture && Array.isArray(e.shareSet.lecture.studies)) {
                            var r = e.shareSet.lecture.studies.length;
                            if (entrylms.Modal.hideAllModal(),
                                r > e.shareSet.studyIndex) {
                                p.isLastStudy = r - 1 == p.studyIndex;
                                e.shareSet.lecture.studies[e.shareSet.studyIndex];
                                g("PROGRESS", e.shareSet.studyIndex),
                                    e.initEntryLms()
                            } else {
                                var o = I();
                                "true" === o.isCodingParty ? "party17f" === o.season ? document.location.href = "http://playsw.or.kr/party17f" : document.location.href = "http://playsw.or.kr/party17s" : function() {
                                    Entry.Utils.blur();
                                    var t = "https://playentry.org/tt#!/custom/lecture/view/" + e.shareSet.lecture._id;
                                    if (!e.isHomework && e.shareSet.lecture.curriculum) {
                                        t = "https://playentry.org/tt#!/custom/curriculum/list?sort=updated&rows=12&page=1";
                                        var n = e.shareSet.lecture.curriculum
                                            , r = "https://playentry.org/api/curriculum/" + n;
                                        a.get(r).success(function(r) {
                                            for (var a = r.lectures, o = null, i = 0, s = a.length; i < s; i++)
                                                if (String(a[i]._id) == String(e.shareSet.lecture._id) && i + 1 < a.length) {
                                                    o = a[i + 1];
                                                    break
                                                }
                                            t = null != o ? e.groupId ? "https://playentry.org/tt#!/group/lecture/view/" + o._id + "/" + e.groupId : "https://playentry.org/tt#!/custom/lecture/view/" + o._id : e.groupId ? "/tt#!/group/curriculum/view/" + n + "/" + e.groupId : "https://playentry.org/tt#!/custom/curriculum/view/" + n,
                                                window.location.href = t
                                        })
                                    } else
                                        e.groupId && (t = e.homeworkId ? "https://playentry.org/tt#!/group/homework/list/" + e.groupId : "https://playentry.org/tt#!/group/lecture/view/" + e.shareSet.lecture._id + "/" + e.groupId),
                                            window.location.href = t
                                }()
                            }
                        }
                    }),
                e.openSpriteManager = function(e) {
                        if (!Entry.engine.isState("stop"))
                            return alert(Lang.Workspace.cannot_add_object),
                                !1;
                        r.open({
                            templateUrl: "https://playentry.org/views/workspace/modal/sprite.html",
                            controller: "SpriteController",
                            backdrop: !1,
                            keyboard: !1,
                            resolve: {
                                parent: function() {
                                    return {
                                        name: "course",
                                        id: e
                                    }
                                }
                            }
                        }).result.then(function(e) {
                                if ("newSprite" === e.target)
                                    (r = {
                                        id: Entry.generateHash(),
                                        objectType: "sprite",
                                        sprite: {}
                                    }).sprite.name = Lang.Workspace.new_object + (Entry.container.getAllObjects().length + 1),
                                        r.sprite.pictures = [],
                                        r.sprite.pictures.push({
                                            dimension: {
                                                width: 960,
                                                height: 540
                                            },
                                            fileurl: Entry.mediaFilePath + "_1x1.png",
                                            name: Lang.Workspace.new_picture,
                                            type: "_system_"
                                        }),
                                        r.sprite.sounds = [],
                                        r.sprite.category = {},
                                        r.sprite.category.main = "new",
                                        r = Entry.container.addObject(r, 0),
                                        Entry.playground.changeViewMode("picture");
                                else if ("sprite" === e.target)
                                    e.data.forEach(function(e) {
                                        var t = {
                                            id: Entry.generateHash(),
                                            objectType: "sprite",
                                            sprite: C(e)
                                        };
                                        t = Entry.container.addObject(t, 0)
                                    });
                                else if ("upload" === e.target)
                                    e.data.forEach(function(e, t, n) {
                                        e.id || (e.id = Entry.generateHash());
                                        var r = {
                                            id: Entry.generateHash(),
                                            objectType: "sprite",
                                            sprite: {
                                                name: e.name,
                                                pictures: [e],
                                                sounds: [],
                                                category: {}
                                            }
                                        };
                                        Entry.container.addObject(r, 0)
                                    });
                                else if ("textBox" == e.target) {
                                    var t = e.data ? e.data : Lang.Blocks.TEXT
                                        , n = e.options
                                        , r = {
                                            id: Entry.generateHash(),
                                            name: Lang.Workspace.textbox,
                                            text: t,
                                            options: n,
                                            objectType: "textBox",
                                            sprite: {
                                                sounds: [],
                                                pictures: []
                                            }
                                        };
                                    Entry.container.addObject(r, 0)
                                } else
                                    console.log("no sprite found")
                            })
                    }                   ,
                e.deleteMessage = function() {
                        r.open({
                            templateUrl: "deleteMessage.html",
                            windowClass: "variableModal",
                            controller: RemoveMessageCtrl,
                            resolve: {
                                items: function() {
                                    return Entry.container.messages_
                                }
                            }
                        }).result.then(function(e) {
                                Entry.container.removeMessage(e)
                            }, function() {})
                    },
                e.dismissModal = function(t) {
                        var n;
                        (n = e.modalInstance) && (n && n.dismiss && n.dismiss(),
                            e.modalInstance = null)
                    },
                e.openPictureManager = function(t, n) {
                        if ("guide" === entrylms.getMode() && !t)
                            return !1;
                        if (!Entry.engine.isState("stop"))
                            return alert(Lang.Workspace.cannot_add_picture),
                                !1;
                        if (!e.modalInstance) {
                            var a = r.open({
                                templateUrl: "../views/workspace/modal/picture.html",
                                controller: "PictureController",
                                appendTo: $(Entry.getDom()),
                                backdrop: !1,
                                keyboard: !1,
                                resolve: {
                                    parent: function() {
                                        return {
                                            name: "course",
                                            id: t,
                                            dataLoadCallback: n
                                        }
                                    }
                                }
                            });
                            e.modalInstance = a,
                                a.result.then(function(t) {
                                    e.modalInstance = null,
                                        t && ("new" === t.target && (t.data = [],
                                            t.data.push({
                                                dimension: {
                                                    height: 1,
                                                    width: 1
                                                },
                                                fileurl: Entry.mediaFilePath + "_1x1.png",
                                                name: Lang.Workspace.new_picture
                                            })),
                                            t.data.forEach(function(e) {
                                                e.id = Entry.generateHash(),
                                                    Entry.playground.addPicture(e, !0)
                                            }))
                                })
                        }
                    },
                e.openSoundManager = function(t, n) {
                        if ("guide" === entrylms.getMode() && !t)
                            return !1;
                        if (!Entry.engine.isState("stop"))
                            return alert(Lang.Workspace.cannot_add_sound_in_run),
                                !1;
                        if (!e.modalInstance) {
                            var a = r.open({
                                templateUrl: "../views/workspace/modal/sound.html",
                                controller: "SoundController",
                                backdrop: !1,
                                keyboard: !1,
                                appendTo: $(Entry.getDom()),
                                resolve: {
                                    parent: function() {
                                        return {
                                            name: "course",
                                            id: t,
                                            dataLoadCallback: n
                                        }
                                    }
                                }
                            });
                            e.modalInstance = a,
                                a.result.then(function(e) {
                                    e.data.forEach(function(e) {
                                        Entry.playground.addSound(e, !0, !0)
                                    })
                                })
                        }
                    },
                e.saveCanvasData = function(e) {
                        var t = e.file
                            , n = new FormData;
                        n.append("data", e.image),
                            $.ajax({
                                url: "/api/picture/canvas",
                                data: n,
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                type: "POST",
                                success: function(n, r) {
                                    "new" === t.mode ? (n.name = "새그림",
                                        Entry.playground.addPicture(n, !0)) : (n.id = t.id,
                                        n.name = t.name,
                                        n.objectId = t.objectId,
                                        Entry.playground.setPicture(n));
                                    var a = new Image
                                        , o = n.filename;
                                    a.src = "https://playentry.org/uploads/" + o.substring(0, 2) + "/" + o.substring(2, 4) + "/image/" + o + ".png",
                                        a.onload = function(t) {
                                            var r = Entry.playground.object.entity.id;
                                            if (n.objectId) {
                                                var o = Entry.container.getObject(n.objectId);
                                                o && o.entity && (r = o.entity.id)
                                            }
                                            Entry.container.cachePicture(n.id + r, a),
                                                Entry.playground.painter.file.id === n.id ? Entry.playground.selectPicture(n) : n.objectId !== Entry.playground.object.id && Entry.container.selectPicture(n.id, n.objectId),
                                                e.task && ("save" == e.task.cmd ? E(e.task.callback) : "saveSubmit" == e.task.cmd ? w(e.task.callback) : S())
                                        }
                                },
                                error: function(e, t) {
                                    console.log("error data:", e),
                                        e.task && ("save" == e.task.cmd ? E(e.task.callback) : "saveSubmit" == e.task.cmd ? w(e.task.callback) : S())
                                }
                            })
                    },
                e.openPictureImport = function() {
                        r.open({
                            templateUrl: "../views/workspace/modal/picture_import.html",
                            controller: "PictureImportController",
                            backdrop: !1,
                            keyboard: !1
                        }).result.then(function(e) {
                                e.data.forEach(function(e) {
                                    e.id = Entry.generateHash(),
                                        Entry.dispatchEvent("pictureImport", e)
                                })
                            })
                    }
                ;
                var C = function(e) {
                    if (e.name = EntryStatic.getName(e.name, "sprite"),
                        e.pictures && e.pictures.length > 0)
                        for (var t = 0, n = e.pictures.length; t < n; t++)
                            e.pictures[t].name = EntryStatic.getName(e.pictures[t].name, "picture");
                    if (e.sounds && e.sounds.length > 0)
                        for (t = 0,
                                 n = e.sounds.length; t < n; t++)
                            e.sounds[t].name = EntryStatic.getName(e.sounds[t].name, "sound");
                    return e
                };
                function P() {
                    var e = document.getElementById("entryCanvas")
                        , t = document.getElementById("tmpCanvas");
                    t || (t = document.createElement("canvas"));
                    var n = t.getContext("2d");
                    return n.width = 313,
                        n.height = 176,
                        n.drawImage(e, 0, 0, e.width, e.height, 0, 0, t.width, t.height),
                        t.toDataURL("image/png").replace(/^data:image\/\w+;base64,/, "")
                }
                function k() {
                    var t = e.shareSet;
                    if (t.isLastStudy) {
                        var n = t.lecture;
                        if (n && n.special && "ebs3" === n.special.name) {
                            a.post("/api/study/sendExternalRequest", {
                                lectureId: e.lectureId
                            }).success(function(e) {
                                    console.log("success", e)
                                }).error(function(e) {
                                    console.log("error:", e)
                                })
                        }
                    }
                }
            }
            ])
    },
    962: function(e, t) {
        angular.module("mean.course").controller("CourseIframeController", ["$scope", "$route", "$routeParams", "$uibModal", "$http", "$location", "$log", "Global", "Sprites", "myProject", "Projects", function(e, t, n, r, a, o, i, s, c, u, l) {
            var d = void 0 === window.localStorage ? void 0 : window.localStorage
                , p = !(void 0 === d || void 0 === window.JSON);
            function m(e) {
                e || (e = new l({})),
                    e.objects = Entry.container.toJSON(),
                    e.scenes = Entry.scene.toJSON(),
                    e.variables = Entry.variableContainer.getVariableJSON(),
                    e.messages = Entry.variableContainer.getMessageJSON(),
                    e.functions = Entry.variableContainer.getFunctionJSON(),
                    e.scenes = Entry.scene.toJSON(),
                    e.speed = Entry.FPS
            }
            e.isChanged = !0,
                e.isSaving = !1,
                e.isDirty = !1,
                e.lectureId = n.lectureId,
                e.hashId = n.hashId,
                e.initWorkspace = function() {
                    a.get("https://playentry.org/api/lecture/" + e.lectureId).success(function(t) {
                        e.lecture = t,
                            document.getElementById("project_name").value = t.title,
                            e.initEntry(),
                            a.get("/api/lecture/visit/" + e.lectureId)
                    })
                }
                ,
                e.initEntry = function() {
                    e.lecture.injectOption.type = "workspace",
                        e.lecture.injectOption.isForLecture = !0,
                        e.lecture.injectOption.fonts = EntryStatic.fonts,
                        e.lecture.injectOption.libDir = "/lib";
                    var t = document.getElementById("workspace");
                    Entry.init(t, e.lecture.injectOption),
                        e.generateBlocks(),
                        e.injectWorkspace(),
                        Entry.addEventListener("saveWorkspace", e.saveWorkspace),
                        Entry.addEventListener("openSpriteManager", e.openSpriteManager),
                        Entry.addEventListener("openPictureManager", e.openPictureManager),
                        Entry.addEventListener("openSoundManager", e.openSoundManager),
                        Entry.addEventListener("changeVariableName", e.changeVariableName),
                        Entry.addEventListener("deleteMessage", e.deleteMessage),
                        Entry.addEventListener("saveCanvasImage", e.saveCanvasData),
                        Entry.addEventListener("openPictureImport", e.openPictureImport),
                        Entry.addEventListener("resetProject", e.resetProject),
                        p && Entry.addEventListener("saveLocalStorageLecture", e.saveLocalStorageLecture),
                        e.lecture.special && e.lecture.special.video ? Entry.container.initTvcast(e.lecture.special.video) : e.lecture.youtubeHash && Entry.container.initYoutube(e.lecture.youtubeHash),
                        e.lecture.doneProject && Entry.container.initDoneProject(e.lecture.doneProject._id)
                }
                ,
                e.generateBlocks = function() {
                    var t = e.lecture.availableBlocks;
                    Entry.playground.setBlockMenu(t)
                }
                ,
                e.injectWorkspace = function() {
                    Entry.enableArduino();
                    var t = d.getItem("localStorageProject");
                    if (null != t)
                        e.project = new l($.parseJSON(t)),
                            Entry.loadProject(e.project),
                            $("#project_name").val(e.project.name),
                            d.removeItem("localStorageProject");
                    else if (e.hashId) {
                        var n = "/api/project/lecture/hash/" + e.hashId;
                        a.get(n).success(function(t, n) {
                            l.get({
                                projectId: t._id
                            }, function(t) {
                                e.project = t,
                                    Entry.loadProject(t),
                                    Entry.start(),
                                    e.isDirty = !0
                            })
                        }).error(function(t, n) {
                                l.get({
                                    projectId: e.lecture.basicProject._id
                                }, function(t) {
                                    e.project = t,
                                        e.project.hashId = e.hashId,
                                        Entry.loadProject(t),
                                        Entry.start(),
                                        e.isDirty = !1
                                }, function(e) {
                                    console.log(e)
                                })
                            })
                    } else
                        l.get({
                            projectId: e.lecture.basicProject._id
                        }, function(t) {
                            e.project = t,
                                Entry.loadProject(t),
                                Entry.start(),
                                e.isDirty = !1
                        })
                }
                ,
                e.resetProject = function() {
                    e.isDirty ? a.delete("/api/project/" + e.project._id).then(function(e) {
                        location.reload()
                    }) : location.reload()
                }
                ,
                e.saveWorkspace = function() {
                    (function() {
                        var t = !0;
                        e.isSaving && (t = !1);
                        Entry.engine.isState("stop") || (Entry.toast.alert(Lang.Msgs.warn, Lang.Workspace.cannot_save_running_project),
                            t = !1);
                        Entry.Func && Entry.Func.workspace && Entry.Func.workspace.visible && (Entry.toast.alert(Lang.Msgs.warn, "함수 편집중에는 저장할 수 없습니다."),
                            t = !1);
                        return t
                    }
                        )() && (e.isSaving = !0,
                        e.project || (e.project = new l({})),
                        Entry.stage.handle.visible = !1,
                        Entry.stage.update(),
                        e.isDirty || (e.project.parent = e.lecture.basicProject._id,
                            delete e.project._id,
                            delete e.project.created,
                            delete e.project.updated,
                            delete e.project.comment,
                            delete e.project.like,
                            delete e.project.shortenUrl,
                            e.project.likeCnt = 0,
                            e.project.visit = 0,
                            e.project.isopen = !1,
                            e.project.isForLecture = !0,
                            e.project.user = s.user._id,
                            e.project.lecture = e.lecture._id),
                        e.project.name = document.getElementById("project_name").value,
                        m(e.project),
                        e.project._id ? e.project.$update(function(t) {
                            e.project._id = t._id,
                                a.post("/api/project/thumbnail/" + t._id, {
                                    thumbnail: document.getElementById("entryCanvas").toDataURL("image/png").replace(/^data:image\/\w+;base64,/, "")
                                }).then(function() {
                                        Entry.toast.success(Lang.Workspace.saved, t.name + " " + Lang.Workspace.saved_msg),
                                            e.isSaving = !1
                                    }, function() {
                                        alert(Lang.Msgs.error_occured),
                                            e.isSaving = !1
                                    })
                        }) : e.project.$save(function(t) {
                            e.project._id = t._id,
                                e.isDirty = !0,
                                a.post("/api/project/thumbnail/" + t._id, {
                                    thumbnail: document.getElementById("entryCanvas").toDataURL("image/png").replace(/^data:image\/\w+;base64,/, "")
                                }).then(function() {
                                        Entry.toast.success(Lang.Workspace.saved, t.name + " " + Lang.Workspace.saved_msg),
                                            e.isSaving = !1
                                    }, function() {
                                        alert(Lang.Msgs.error_occured),
                                            e.isSaving = !1
                                    })
                        }))
                }
                ,
                e.saveLocalStorageLecture = function(t) {
                    if (!(Entry.Func && Entry.Func.workspace && Entry.Func.workspace.visible)) {
                        var n;
                        m(n = {}),
                            n.name = document.getElementById("project_name").value,
                            n.thumbnail = document.getElementById("entryCanvas").toDataURL("image/jpeg", .1),
                            d.setItem("localStorageProject", JSON.stringify(n)),
                            window.location.href = "/lecture/iframe?lang=" + t + "#!/" + e.lectureId + "/" + e.hashId
                    }
                }
                ,
                e.openSpriteManager = function() {
                    if (!Entry.engine.isState("stop"))
                        return alert(Lang.Workspace.cannot_add_object),
                            !1;
                    r.open({
                        templateUrl: "/views/workspace/modal/sprite.html",
                        controller: "SpriteController",
                        backdrop: !1,
                        keyboard: !1,
                        resolve: {
                            parent: function() {
                                return "lecture"
                            }
                        }
                    }).result.then(function(e) {
                            if ("newSprite" === e.target)
                                (r = {
                                    id: Entry.generateHash(),
                                    objectType: "sprite",
                                    sprite: {}
                                }).sprite.name = "새 오브젝트" + (Entry.container.getAllObjects().length + 1),
                                    r.sprite.pictures = [],
                                    r.sprite.pictures.push({
                                        dimension: {
                                            height: 1,
                                            width: 1
                                        },
                                        fileurl: Entry.mediaFilePath + "_1x1.png",
                                        name: Lang.Workspace.new_picture,
                                        type: "_system_"
                                    }),
                                    r.sprite.sounds = [],
                                    r.sprite.category = {},
                                    r.sprite.category.main = "new",
                                    r = Entry.container.addObject(r, 0),
                                    Entry.playground.changeViewMode("picture");
                            else if ("sprite" === e.target)
                                e.data.forEach(function(e) {
                                    var t = {
                                        id: Entry.generateHash(),
                                        objectType: "sprite",
                                        sprite: e
                                    };
                                    t = Entry.container.addObject(t, 0)
                                });
                            else if ("upload" === e.target)
                                e.data.forEach(function(e, t, n) {
                                    e.id || (e.id = Entry.generateHash());
                                    var r = {
                                        id: Entry.generateHash(),
                                        objectType: "sprite",
                                        sprite: {
                                            name: e.name,
                                            pictures: [e],
                                            sounds: [],
                                            category: {}
                                        }
                                    };
                                    Entry.container.addObject(r, 0)
                                });
                            else if ("textBox" == e.target) {
                                var t = e.data ? e.data : Lang.Blocks.TEXT
                                    , n = e.options
                                    , r = {
                                        id: Entry.generateHash(),
                                        name: t,
                                        options: n,
                                        objectType: "textBox",
                                        sprite: {
                                            sounds: [],
                                            pictures: []
                                        }
                                    };
                                Entry.container.addObject(r, 0)
                            } else
                                console.log("no sprite found")
                        })
                }
                ,
                e.deleteMessage = function() {
                    r.open({
                        templateUrl: "deleteMessage.html",
                        windowClass: "variableModal",
                        controller: RemoveMessageCtrl,
                        resolve: {
                            items: function() {
                                return Entry.container.messages_
                            }
                        }
                    }).result.then(function(e) {
                            Entry.container.removeMessage(e)
                        }, function() {})
                }
                ,
                e.openPictureManager = function() {
                    if (!Entry.engine.isState("stop"))
                        return alert(Lang.Workspace.cannot_add_picture),
                            !1;
                    r.open({
                        templateUrl: "../views/workspace/modal/picture.html",
                        controller: "PictureController",
                        backdrop: !1,
                        keyboard: !1,
                        resolve: {
                            parent: function() {
                                return "lecture"
                            }
                        }
                    }).result.then(function(e) {
                            "new" === e.target && (e.data = [],
                                e.data.push({
                                    dimension: {
                                        height: 1,
                                        width: 1
                                    },
                                    fileurl: Entry.mediaFilePath + "_1x1.png",
                                    name: Lang.Workspace.new_picture
                                })),
                                e.data.forEach(function(e) {
                                    e.id = Entry.generateHash(),
                                        Entry.playground.addPicture(e, !0)
                                })
                        })
                }
                ,
                e.openSoundManager = function() {
                    if (!Entry.engine.isState("stop"))
                        return alert(Lang.Workspace.cannot_add_sound),
                            !1;
                    r.open({
                        templateUrl: "../views/workspace/modal/sound.html",
                        controller: "SoundController",
                        backdrop: !1,
                        keyboard: !1,
                        resolve: {
                            parent: function() {
                                return "lecture"
                            }
                        }
                    }).result.then(function(e) {
                            e.data.forEach(function(e) {
                                e.id = Entry.generateHash(),
                                    Entry.playground.addSound(e, !0)
                            })
                        })
                }
                ,
                e.saveCanvasData = function(e) {
                    var t = e.file
                        , n = new FormData;
                    n.append("data", e.image),
                        $.ajax({
                            url: "/api/picture/canvas",
                            data: n,
                            cache: !1,
                            contentType: !1,
                            processData: !1,
                            type: "POST",
                            success: function(e, n) {
                                "new" === t.mode ? (e.name = "새그림",
                                    Entry.playground.addPicture(e, !0)) : (e.id = t.id,
                                    e.name = t.name,
                                    Entry.playground.setPicture(e));
                                var r = new Image
                                    , a = e.filename;
                                r.src = "https://playentry.org/uploads/" + a.substring(0, 2) + "/" + a.substring(2, 4) + "/image/" + a + ".png",
                                    r.onload = function(t) {
                                        Entry.container.cachePicture(e.id, r),
                                            Entry.playground.selectPicture(e)
                                    }
                            },
                            error: function(e, t) {
                                console.log("error data:", e)
                            }
                        })
                }
                ,
                e.openPictureImport = function() {
                    r.open({
                        templateUrl: "../views/workspace/modal/picture_import.html",
                        controller: "PictureImportController",
                        backdrop: !1,
                        keyboard: !1
                    }).result.then(function(e) {
                            e.data.forEach(function(e) {
                                e.id = Entry.generateHash(),
                                    Entry.dispatchEvent("pictureImport", e)
                            })
                        })
                }
        }
        ])
    },
    963: function(t, n) {
        angular.module("mean.course").controller("HeaderController", ["$scope", "Global", "$uibModal", "$http", "$location", "$cookies", "$routeParams", "$route", "myProject", "Projects", "shareSet", "BugReporter", function(t, n, r, a, o, i, s, c, u, l, d, p) {
            t.global = n,
                t.testClick = function() {
                    console.log("click", arguments)
                }
            ;
            var m = void 0 === window.localStorage ? void 0 : window.localStorage;
            void 0 === m || window.JSON;
            t.loadlocalstorage = !1,
                t.localStorageproject = new l({});
            var g = c.current
                , f = g && g.params;
            t.isGroupMem = !1,
                t.shareSet = d,
                t.isHomework = !1,
                t.isAuth = n.authenticated;
            f.groupId && a.get("/api/group/" + f.groupId).success(function(e) {
                t.currentGroup = e,
                    t.isGroupOwner = n.isGroupOwner(e),
                    f.studentId && a.get("/api/student/" + f.studentId).success(function(e) {
                        t.pOwner = e,
                            t.currentStudent = e
                    }),
                    t.isGroupOwner && f.studentId && (t.teacherMode = !0),
                    f.homeworkId && (y(),
                        f.studentId && f.studentId === window.user._id && a.get("/api/student/group/" + f.groupId).success(function(e) {
                            if (String(e.group) == String(f.groupId))
                                return t.isGroupMem = !0,
                                    t.student = window.user,
                                    void (t.currentStudent = window.user)
                        }))
            });
            var y = function() {
                f && f.homeworkId && f.studentId && (t.isHomework = !0,
                    t.isSubmitted = !1,
                    t.isOverDue = !1,
                    a.get("/api/group/homework/" + f.groupId + "/" + f.homeworkId).success(function(e) {
                        for (var n = e.submissions, r = 0; r < n.length; r++) {
                            var a = n[r];
                            a.student === f.studentId && a.submitDate && (t.isSubmitted = !0)
                        }
                        t.isStudent = !0,
                            t.homework = e,
                            d.homework = e,
                            d.isHomeworkLapse = e.isLapse,
                            t.isOverDue = e.isLapse
                    }).error(function(e) {
                            console.log("error", err)
                        }))
            };
            function h(e) {
                var n = Lang.Menus.submit_homework_first_title
                    , r = Lang.Menus.submit_homework_first_content
                    , a = "SUCCESS";
                "SUBMITTED" === d.studyStatus[d.studyIndex].status && (n = Lang.Menus.submit_homework_again_title,
                    r = Lang.Menus.submit_homework_again_content);
                var o = new Date(t.homework.due).getTime()
                    , i = e.getTime();
                t.isOverDue = i - o > 0,
                    t.isOverDue && (n = Lang.Menus.submit_homework_expired_title,
                        r = Lang.Menus.submit_homework_expired_content,
                        a = "FAIL");
                var s = d.studyIndex + 1 == d.studyStatus.length;
                new entrylms.Modal([{
                    type: "COMPLETE",
                    title: n,
                    titleType: a,
                    isHomework: t.isHomework,
                    isHomeworkLapse: d.isHomeworkLapse,
                    isLastStudy: s,
                    isSubmit: !0,
                    content: r
                }]).on("show", function() {}).on("hide", function() {}).on("click", function(e) {
                        var n;
                        Entry.engine.toggleStop();
                        var r = $.Deferred()
                            , a = $.Deferred();
                        "next" == e ? (n = "ExitStudy",
                            entrylms.emit("saveWorkspace", function() {
                                r.resolve(),
                                    a.resolve()
                            })) : "submit" == e ? (t.isSubmitted = !0,
                            n = "SubmitStudy",
                            entrylms.emit("saveWorkspace", function() {
                                r.resolve()
                            }),
                            entrylms.emit("saveWorkspaceBySubmit", function() {
                                a.resolve()
                            })) : (r.reject(),
                            a.reject()),
                            $.when(r, a).then(function() {
                                entrylms.emit(n)
                            }).fail(function() {})
                    }).show()
            }
            function _(e, t, n) {
                if (t.lecture === n._id)
                    for (var r = 0; r < t.studyStatus.length; r++) {
                        var a = t.studyStatus[r];
                        e.data[r] = a
                    }
                return e
            }
            function v(e, t) {
                (e = {}).type = "LECTURE_INDICATOR",
                    e.data = [];
                for (var n = 0; n < t; n++)
                    e.data[n] = {
                        type: "BASIC"
                    };
                return e
            }
            t.getCourseIndicatorBadgeClass = function(e, t) {
                var n = "courseIndicatorBadge";
                if (d.studyIndex == t)
                    return n + " courseIndicatorProgress";
                switch (e.status) {
                    case "BASIC":
                    case "PROGRESS":
                        break;
                    default:
                        n += " courseIndicatorComplete"
                }
                return n
            }
                ,
                t.submitHomework = function() {
                    a.get("/api/servertime").success(function(e) {
                        h(new Date(e))
                    }).error(function(e) {
                            h(new Date)
                        })
                }
                ,
                t.changeStudyIndex = function(e) {
                    var t = d.studyStatus[e];
                    t && "BASIC" !== t.status && (d.studyIndex = e)
                }
                ,
                t.status = {
                    isResetOn: !1,
                    isSaveOn: !1,
                    isUserInfoOn: !1,
                    isLangOn: !1
                },
                t.init = function() {
                    $(".dropdown-menu").find("form").click(function(e) {
                        e.stopPropagation()
                    }),
                        t.global.user || (t.global.user = {}),
                        t.global.user.language = window.lang || "ko",
                        y(),
                        d && d.lecture && d.lecture.studies && (t.currentStudy = d.lecture.studies[d.studyIndex]),
                        a({
                            method: "GET",
                            url: "https://playentry.org/api/lecture/curriculum/59018df41f4f9d9b391c59d9"
                        }).success(function(e) {
                                if (e.curriculum) {
                                    t.curriculumId = e.curriculum._id,
                                        t.curriculum = e.curriculum;
                                    a({
                                        method: "GET",
                                        url: "https://playentry.org/api/curriculum/" + t.curriculumId + "?like=true&view=true",
                                        params: {
                                            targetSubject: "curriculum"
                                        }
                                    }).success(function(e, n) {
                                            t.lectures = e.lectures
                                        })
                                }
                            }),
                        $(".page-header").find("a").on("touchstart", function(t) {
                            if ($(this).attr("class").indexOf("dropdown-toggle") > -1) {
                                "none" != $(this).next("ul.dropdown-menu").css("display") ? $(this).next("ul.dropdown-menu").css("display", "none") : $(this).next("ul.dropdown-menu").css("display", "block")
                            } else {
                                var n = $(this).attr("href");
                                n && "" != n && (window.location.href = $(this).attr("href"))
                            }
                            e.stopPropagation()
                        }),
                        t.theme = o.search().theme ? o.search().theme : "default"
                }
                ,
                t.setLanguage = function(e) {
                    t.global.user.language = e;
                    var n = o.absUrl()
                        , r = n.lastIndexOf("/")
                        , a = n.length
                        , i = "/course?lang=" + e + "#!/";
                    a > r + 1 && (i += n.substring(r + 1, a));
                    m.setItem("lang", e),
                        window.location.href = i
                }
                ,
                t.blockHelperOn = function() {
                    Entry.helper.blockHelperOn(),
                        Entry.container.changeTabView("helper")
                }
                ,
                t.sendBug = function(e) {
                    p.report.bind(t)(e, "course bug")
                }
                ,
                t.showSignup = function() {
                    $.event.trigger({
                        type: "showSignUp"
                    })
                }
                ,
                t.showLogin = function(e) {
                    $.event.trigger({
                        type: "showLogin"
                    })
                }
                ,
                t.showPopup = function(e) {
                    $("#" + e).css("display", "block")
                }
                ,
                t.hidePopup = function(e) {
                    t.isSignUpVisible = !1,
                        e = e || "bugReport",
                        $("#" + e).css("display", "none")
                }
                ,
                t.hideConfirm = function(e) {
                    document.getElementById(e).style.display = "none"
                }
                ,
                t.showAlert = function(e, n) {
                    e && t.hideConfirm(e);
                    var r = document.getElementById(n);
                    r.style.width = window.innerWidth + "px",
                        r.style.height = window.innerHeight + "px",
                        r.style.display = "block"
                }
                ,
                t.dispatchEntryEvent = function(e) {
                    entrylms.emit(e)
                }
                ,
                t.isLang = function(e) {
                    return i.get("lang") == e
                }
                ,
                t.signout = function() {
                    n.resetUserWorkspace(),
                        window.location.href = "/out"
                }
                ,
                t.isButtonVisible = function(e) {
                    if (!t.teacherMode) {
                        var n = d.lecture
                            , r = n && "studies"in n && n.studies[d.studyIndex];
                        if (!r)
                            return !1;
                        switch (e) {
                            case "submitHomework":
                                if (!t.isGroupOwner && n.isForHomework && n.studies && "free" == r.type)
                                    return !0;
                                break;
                            case "doneStudy":api/lecture/curriculum
                                if (!n.isForHomework && n.studies && "free" == r.type)
                                    return !0
                        }
                        return !1
                    }
                }
                ,
                t.doneStudy = function() {
                    (Entry.Utils.blur(),
                        t.teacherMode) || new entrylms.Modal([{
                        type: "COMPLETE",
                        titleType: "FINISH",
                        isHomework: t.isHomework,
                        isHomeworkLapse: d.isHomeworkLapse,
                        isLastStudy: d.isLastStudy,
                        isSubmit: !0,
                        title: Lang.Menus.done_study_title,
                        content: Lang.Menus.done_study_content,
                        media: {
                            category: "PROJECT_ELEMENT",
                            content: Entry.engine.view_
                        }
                    }]).on("show", function() {
                            Entry.engine.closeFullScreen(),
                                Entry.stage.updateBoundRect()
                        }).on("hide", function() {
                            Entry.view_.insertBefore(Entry.engine.view_, Entry.container.view_),
                                Entry.stage.updateBoundRect()
                        }).on("click", function(e) {
                            "next" === e && (n.authenticated ? entrylms.emit("saveWorkspace", function() {
                                entrylms.emit("ExitStudy")
                            }) : entrylms.emit("ExitStudy"))
                        }).show()
                }
                ,
                t.showList = function() {
                    var e, n;
                    e = {
                        curriculum: t.curriculumId
                    },
                        n = "/api/lecture/curriculumProgress/" + t.curriculum._id,
                        a.post(n, e).success(function(e) {
                            !function(e) {
                                for (var n = function() {
                                    var e = []
                                        , n = t.lectures;
                                    t.notStuBasic = [];
                                    for (var r = 0; r < n.length; r++) {
                                        var a = n[r]
                                            , o = a.studies.length;
                                        e[r] = v(a, o)
                                    }
                                    return e
                                }(), r = t.lectures, a = 0; a < r.length; a++) {
                                    var o = r[a];
                                    n[a].title = o.title;
                                    for (var i = 0; i < e.length; i++) {
                                        var s = e[i];
                                        n[a] = _(n[a], s, o)
                                    }
                                }
                                t.notStuBasic = n,
                                    t.showProgress()
                            }(e)
                        })
                }
                ,
                t.showProgress = function() {
                    new entrylms.Modal([{
                        type: "LECTURE_PROGRESS",
                        title: t.curriculum.title,
                        content: t.notStuBasic,
                        contentType: "CURRICULUM",
                        closeButtonText: Lang.Menus.close
                    }]).on("show", function() {}).on("hide", function() {}).on("click", function(e, n) {
                            if ("close" !== e) {
                                var r = t.shareSet
                                    , a = r.studyStatus[r.studyIndex].category
                                    , o = t.lectures[n.lectureIndex]._id
                                    , i = n.studyIndex
                                    , s = t.lectures[n.lectureIndex].isForCourse
                                    , c = s ? "/course#!" : "/le#!";
                                s || (i = ""),
                                    ("select" !== e || "free" !== a && "mission" !== a) && s ? f.groupId ? window.location.href = c + "/group/" + f.groupId + "/" + o + "/" + f.studentId + "/" + i : window.location.href = c + "/" + o + "/" + i : entrylms.emit("saveWorkspace", function() {
                                        f.groupId ? window.location.href = c + "/group/" + f.groupId + "/" + o + "/" + f.studentId + "/" + i : window.location.href = c + "/" + o + "/" + i
                                    })
                            }
                        }).show()
                }
        }
        ])
    },
    964: function(t, n, r) {
        "use strict";
        angular.module("mean.course").controller("HeaderIframeController", ["$scope", "Global", "$uibModal", "$http", "$location", "$cookies", "$route", "$routeParams", "myProject", "Projects", function(t, n, r, a, o, i, s, c, u, l, d) {
            t.global = n;
            var p = void 0 === window.localStorage ? void 0 : window.localStorage;
            void 0 === p || window.JSON;
            t.$storage = d,
                t.loadlocalstorage = !1,
                t.localStorageproject = new l({}),
                t.lectureId = c.lectureId,
                t.hashId = c.hashId,
                t.init = function() {
                    $(".dropdown-menu").find("form").click(function(e) {
                        e.stopPropagation()
                    }),
                        t.global.user || (t.global.user = {}),
                        t.global.user.language = i.get("lang"),
                        t.global.user.language || (t.global.user.language = "ko"),
                        $(".page-header").find("a").on("touchstart", function(t) {
                            if ($(this).attr("class").indexOf("dropdown-toggle") > -1) {
                                "none" != $(this).next("ul.dropdown-menu").css("display") ? $(this).next("ul.dropdown-menu").css("display", "none") : $(this).next("ul.dropdown-menu").css("display", "block")
                            } else {
                                var n = $(this).attr("href");
                                n && "" != n && (window.location.href = $(this).attr("href"))
                            }
                            e.stopPropagation()
                        }),
                        t.theme = o.search().theme ? o.search().theme : "default"
                }
                ,
                t.resetProject = function() {
                    Entry.dispatchEvent("resetProject")
                }
                ,
                t.stopPropagation = function(e) {
                    e.stopPropagation()
                }
                ,
                t.project = new l({}),
                t.loadWorkspace = function() {
                    r.open({
                        templateUrl: "../views/workspace/modal/load.html",
                        controller: m,
                        backdrop: !1,
                        keyboard: !1
                    }).result.then(function(e) {})
                }
            ;
            var m = function(e, t) {
                e.projects = [],
                    a({
                        method: "GET",
                        url: "/api/project/browse"
                    }).success(function(t, n) {
                            e.projects = t
                        }).error(function(t, n) {
                            e.status = n
                        }),
                    e.ok = function(e) {
                        t.close(e)
                    }
                    ,
                    e.cancel = function() {
                        t.dismiss("cancel")
                    }
            };
            m.$inject = ["$scope", "$uibModalInstance"],
                t.setLanguage = function(e) {
                    Entry.dispatchEvent("saveLocalStorageLecture", e)
                }
                ,
                t.saveLocalStorageProject = function() {
                    t.localStorageproject.name = document.getElementById("project_name").value,
                        t.localStorageproject.thumbnail = document.getElementById("entryCanvas").toDataURL("image/jpeg", .1),
                        t.localStorageproject.objects = Entry.container.toJSON(),
                        t.localStorageproject.scenes = Entry.scene.toJSON(),
                        t.localStorageproject.variables = Entry.variableContainer.getVariableJSON(),
                        t.localStorageproject.messages = Entry.variableContainer.getMessageJSON(),
                        t.localStorageproject.functions = Entry.variableContainer.getFunctionJSON(),
                        t.localStorageproject.scenes = Entry.scene.toJSON(),
                        t.localStorageproject.speed = Entry.FPS,
                        p.setItem("localStorageLecture", JSON.stringify(t.localStorageproject))
                }
                ,
                t.blockHelperOn = function() {
                    Entry.helper.blockHelperOn(),
                        Entry.container.changeTabView("helper")
                }
                ,
                t.dispatchEntryEvent = function(e) {
                    Entry.dispatchEvent(e)
                }
        }
        ])
    }
});
