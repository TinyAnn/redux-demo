webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _FormBox = __webpack_require__(16);

	var _FormBox2 = _interopRequireDefault(_FormBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_FormBox2.default, null), document.getElementById('test'));

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Person = __webpack_require__(17);

	var _Person2 = _interopRequireDefault(_Person);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormBox = function (_Component) {
		_inherits(FormBox, _Component);

		function FormBox(props) {
			_classCallCheck(this, FormBox);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormBox).call(this, props));

			_this.state = {
				name: '',
				age: '',
				persons: []
			};
			return _this;
		}

		_createClass(FormBox, [{
			key: '_handleChange',
			value: function _handleChange(event) {
				this.setState(_defineProperty({}, event.target.name, event.target.value));
			}
		}, {
			key: '_handleClick',
			value: function _handleClick() {
				var _state = this.state;
				var age = _state.age;
				var name = _state.name;


				this.setState({
					name: '',
					age: '',
					persons: this.state.persons.concat([{ age: age, name: name }])
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _state2 = this.state;
				var name = _state2.name;
				var age = _state2.age;
				var persons = _state2.persons;


				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'span',
						null,
						'姓名:'
					),
					_react2.default.createElement('input', { value: name, name: 'name', onChange: this._handleChange.bind(this) }),
					_react2.default.createElement(
						'span',
						null,
						'年龄:'
					),
					_react2.default.createElement('input', { value: age, name: 'age', onChange: this._handleChange.bind(this) }),
					_react2.default.createElement('input', { type: 'button', onClick: this._handleClick.bind(this), value: '确认' }),
					persons.map(function (person, index) {
						return _react2.default.createElement(_Person2.default, { key: index, name: person.name, age: person.age });
					})
				);
			}
		}]);

		return FormBox;
	}(_react.Component);

	exports.default = FormBox;

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Person = function (_Component) {
		_inherits(Person, _Component);

		function Person() {
			_classCallCheck(this, Person);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Person).apply(this, arguments));
		}

		_createClass(Person, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var name = _props.name;
				var age = _props.age;


				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'span',
						null,
						'姓名:'
					),
					_react2.default.createElement(
						'span',
						null,
						name
					),
					_react2.default.createElement(
						'span',
						null,
						' 年龄:'
					),
					_react2.default.createElement(
						'span',
						null,
						age
					)
				);
			}
		}]);

		return Person;
	}(_react.Component);

	exports.default = Person;

/***/ }

});