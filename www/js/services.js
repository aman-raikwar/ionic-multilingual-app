angular.module('starter.services', [])
    .service('Listings', function() {
        return {
            getAll: function() {
                var lists = [{
                    title: {
                        'en': 'Table',
                        'hi': 'मेज'
                    },
                    id: 1
                }, {
                    title: {
                        'en': 'Chair',
                        'hi': 'कुरसी'
                    },
                    id: 2
                }, {
                    title: {
                        'en': 'Pen',
                        'hi': 'कलम'
                    },
                    id: 3
                }];
                return lists;
            },
            getSingle: function(id) {
                var lists = [{
                    title: {
                        'en': 'Table',
                        'hi': 'मेज'
                    },
                    subcat: [
                        'AST-09UW4RXXQA',
                        'AST-09UW4RXXQB',
                        'AST-09UW4RXXQC',
                        'AST-09UW4RXXQD',
                        'AST-09UW4RXXQE',
                        'AST-09UW4RXXQF',
                        'AST-09UW4RXXQG',
                        'AST-09UW4RXXQH',
                    ],
                    id: 1
                }, {
                    title: {
                        'en': 'Chair',
                        'hi': 'कुरसी'
                    },
                    subcat: [
                        'AST-09UW4RXXQA',
                        'AST-09UW4RXXQB',
                        'AST-09UW4RXXQC',
                        'AST-09UW4RXXQD',
                        'AST-09UW4RXXQE',
                        'AST-09UW4RXXQF',
                        'AST-09UW4RXXQG',
                        'AST-09UW4RXXQH',
                    ],
                    id: 2
                }, {
                    title: {
                        'en': 'Pen',
                        'hi': 'कलम'
                    },
                    subcat: [
                        'AST-09UW4RXXQA',
                        'AST-09UW4RXXQB',
                        'AST-09UW4RXXQC',
                        'AST-09UW4RXXQD',
                        'AST-09UW4RXXQE',
                        'AST-09UW4RXXQF',
                        'AST-09UW4RXXQG',
                        'AST-09UW4RXXQH',
                    ],
                    id: 3
                }];

                var list = '';
                for (var i = 0; i < lists.length; i++) {
                    if (lists[i]['id'] == id) {
                        list = lists[i];
                        break;
                    }
                }

                return list;
            },
            getRec: function(id, catid) {
                var rec = {
                    title: {
                        'en': 'Table',
                        'hi': 'मेज'
                    },
                    subtitle: catid,
                    id: 1
                };

                return rec;
            }
        }
    });
