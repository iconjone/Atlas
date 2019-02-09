import Utils from '../utils/utils';
import F7ListItemContent from './list-item-content';
import Mixins from '../utils/mixins';
import __vueComponentTransformJSXProps from '../runtime-helpers/vue-component-transform-jsx-props.js';
import __vueComponentSetState from '../runtime-helpers/vue-component-set-state.js';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-list-item',
  props: Object.assign({
    id: [String, Number],
    title: [String, Number],
    text: [String, Number],
    media: String,
    subtitle: [String, Number],
    header: [String, Number],
    footer: [String, Number],
    link: [Boolean, String],
    target: String,
    noFastclick: Boolean,
    noFastClick: Boolean,
    after: [String, Number],
    badge: [String, Number],
    badgeColor: String,
    mediaItem: Boolean,
    mediaList: Boolean,
    divider: Boolean,
    groupTitle: Boolean,
    swipeout: Boolean,
    swipeoutOpened: Boolean,
    sortable: Boolean,
    accordionItem: Boolean,
    accordionItemOpened: Boolean,
    smartSelect: Boolean,
    smartSelectParams: Object,
    noChevron: Boolean,
    chevronCenter: Boolean,
    checkbox: Boolean,
    radio: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    name: String,
    value: [String, Number, Array],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    itemInput: Boolean,
    itemInputWithInfo: Boolean,
    inlineLabel: Boolean,
    virtualListIndex: Number
  }, Mixins.colorProps, Mixins.linkRouterProps, Mixins.linkActionsProps),

  data() {
    const props = __vueComponentProps(this);

    const state = (() => {
      return {
        isMedia: props.mediaItem || props.mediaList,
        isSortable: props.sortable,
        isSimple: false
      };
    })();

    return {
      state
    };
  },

  render() {
    const _h = this.$createElement;
    const self = this;
    let linkEl;
    let itemContentEl;
    const props = self.props;
    const {
      id,
      style,
      className,
      title,
      text,
      media,
      subtitle,
      header,
      footer,
      link,
      href,
      target,
      noFastclick,
      noFastClick,
      after,
      badge,
      badgeColor,
      mediaItem,
      mediaList,
      divider,
      groupTitle,
      swipeout,
      accordionItem,
      accordionItemOpened,
      smartSelect,
      checkbox,
      radio,
      checked,
      defaultChecked,
      name,
      value,
      readonly,
      required,
      disabled,
      itemInput,
      itemInputWithInfo,
      inlineLabel,
      sortable,
      noChevron,
      chevronCenter,
      virtualListIndex
    } = props;
    const isMedia = mediaItem || mediaList || self.state.isMedia;
    const isSortable = sortable || self.state.isSortable;
    const isSimple = self.state.isSimple;

    if (!isSimple) {
      const needsEvents = !(link || href || accordionItem || smartSelect);
      itemContentEl = _h(F7ListItemContent, {
        on: needsEvents ? {
          click: self.onClick,
          change: self.onChange
        } : undefined,
        attrs: {
          title: title,
          text: text,
          media: media,
          subtitle: subtitle,
          after: after,
          header: header,
          footer: footer,
          badge: badge,
          badgeColor: badgeColor,
          mediaList: isMedia,
          accordionItem: accordionItem,
          checkbox: checkbox,
          checked: checked,
          defaultChecked: defaultChecked,
          radio: radio,
          name: name,
          value: value,
          readonly: readonly,
          required: required,
          disabled: disabled,
          itemInput: itemInput,
          itemInputWithInfo: itemInputWithInfo,
          inlineLabel: inlineLabel
        }
      }, [this.$slots['content-start'], this.$slots['content'], this.$slots['content-end'], this.$slots['media'], this.$slots['inner-start'], this.$slots['inner'], this.$slots['inner-end'], this.$slots['after-start'], this.$slots['after'], this.$slots['after-end'], this.$slots['header'], this.$slots['footer'], this.$slots['before-title'], this.$slots['title'], this.$slots['after-title'], this.$slots['subtitle'], this.$slots['text'], swipeout || accordionItem ? null : self.$slots.default]);

      if (link || href || accordionItem || smartSelect) {
        const linkAttrs = Utils.extend({
          href: link === true || accordionItem || smartSelect ? '#' : link || href,
          target
        }, Mixins.linkRouterAttrs(props), Mixins.linkActionsAttrs(props));
        const linkClasses = Utils.classNames({
          'item-link': true,
          'no-fastclick': noFastclick || noFastClick,
          'smart-select': smartSelect
        }, Mixins.linkRouterClasses(props), Mixins.linkActionsClasses(props));
        linkEl = _h('a', __vueComponentTransformJSXProps(Object.assign({
          ref: 'linkEl',
          class: linkClasses
        }, linkAttrs)), [itemContentEl]);
      }
    }

    const liClasses = Utils.classNames(className, {
      'item-divider': divider,
      'list-group-title': groupTitle,
      'media-item': isMedia,
      swipeout,
      'accordion-item': accordionItem,
      'accordion-item-opened': accordionItemOpened,
      disabled: disabled && !(radio || checkbox),
      'no-chevron': noChevron,
      'chevron-center': chevronCenter
    }, Mixins.colorClasses(props));

    if (divider || groupTitle) {
      return _h('li', {
        ref: 'el',
        style: style,
        class: liClasses,
        attrs: {
          id: id,
          'data-virtual-list-index': virtualListIndex
        }
      }, [_h('span', [this.$slots['default'] || [title]])]);
    }

    if (isSimple) {
      return _h('li', {
        ref: 'el',
        style: style,
        class: liClasses,
        attrs: {
          id: id,
          'data-virtual-list-index': virtualListIndex
        }
      }, [title, this.$slots['default']]);
    }

    const linkItemEl = link || href || smartSelect || accordionItem ? linkEl : itemContentEl;
    return _h('li', {
      ref: 'el',
      style: style,
      class: liClasses,
      attrs: {
        id: id,
        'data-virtual-list-index': virtualListIndex
      }
    }, [this.$slots['root-start'], swipeout ? _h('div', {
      class: 'swipeout-content'
    }, [linkItemEl]) : linkItemEl, isSortable && _h('div', {
      class: 'sortable-handler'
    }), (swipeout || accordionItem) && self.$slots.default, this.$slots['root'], this.$slots['root-end']]);
  },

  watch: {
    'props.swipeoutOpened': function watchSwipeoutOpened(opened) {
      const self = this;
      if (!self.props.swipeout) return;
      const el = self.$refs.el;

      if (opened) {
        self.$f7.swipeout.open(el);
      } else {
        self.$f7.swipeout.close(el);
      }
    }
  },

  created() {
    const self = this;
    self.onClick = self.onClick.bind(self);
    self.onChange = self.onChange.bind(self);
    self.onSwipeoutOpen = self.onSwipeoutOpen.bind(self);
    self.onSwipeoutOpened = self.onSwipeoutOpened.bind(self);
    self.onSwipeoutClose = self.onSwipeoutClose.bind(self);
    self.onSwipeoutClosed = self.onSwipeoutClosed.bind(self);
    self.onSwipeoutDelete = self.onSwipeoutDelete.bind(self);
    self.onSwipeoutDeleted = self.onSwipeoutDeleted.bind(self);
    self.onSwipeoutOverswipeEnter = self.onSwipeoutOverswipeEnter.bind(self);
    self.onSwipeoutOverswipeExit = self.onSwipeoutOverswipeExit.bind(self);
    self.onSwipeout = self.onSwipeout.bind(self);
    self.onAccBeforeOpen = self.onAccBeforeOpen.bind(self);
    self.onAccOpen = self.onAccOpen.bind(self);
    self.onAccOpened = self.onAccOpened.bind(self);
    self.onAccBeforeClose = self.onAccBeforeClose.bind(self);
    self.onAccClose = self.onAccClose.bind(self);
    self.onAccClosed = self.onAccClosed.bind(self);
  },

  mounted() {
    const self = this;
    const {
      el,
      linkEl
    } = self.$refs;
    if (!el) return;
    const {
      link,
      href,
      smartSelect,
      swipeout,
      swipeoutOpened,
      accordionItem,
      smartSelectParams
    } = self.props;
    const needsEvents = !(link || href || accordionItem || smartSelect);

    if (!needsEvents && linkEl) {
      linkEl.addEventListener('click', self.onClick);
    }

    self.$listEl = self.$$(el).parents('.list, .list-group').eq(0);

    if (self.$listEl.length) {
      self.setState({
        isMedia: self.$listEl.hasClass('media-list'),
        isSimple: self.$listEl.hasClass('simple-list'),
        isSortable: self.$listEl.hasClass('sortable')
      });
    }

    if (swipeout) {
      el.addEventListener('swipeout:open', self.onSwipeoutOpen);
      el.addEventListener('swipeout:opened', self.onSwipeoutOpened);
      el.addEventListener('swipeout:close', self.onSwipeoutClose);
      el.addEventListener('swipeout:closed', self.onSwipeoutClosed);
      el.addEventListener('swipeout:delete', self.onSwipeoutDelete);
      el.addEventListener('swipeout:deleted', self.onSwipeoutDeleted);
      el.addEventListener('swipeout:overswipeenter', self.onSwipeoutOverswipeEnter);
      el.addEventListener('swipeout:overswipeexit', self.onSwipeoutOverswipeExit);
      el.addEventListener('swipeout', self.onSwipeout);
    }

    if (accordionItem) {
      el.addEventListener('accordion:beforeopen', self.onAccBeforeOpen);
      el.addEventListener('accordion:open', self.onAccOpen);
      el.addEventListener('accordion:opened', self.onAccOpened);
      el.addEventListener('accordion:beforeclose', self.onAccBeforeClose);
      el.addEventListener('accordion:close', self.onAccClose);
      el.addEventListener('accordion:closed', self.onAccClosed);
    }

    self.$f7ready(f7 => {
      if (smartSelect) {
        const ssParams = Utils.extend({
          el: el.querySelector('a.smart-select')
        }, smartSelectParams || {});
        self.f7SmartSelect = f7.smartSelect.create(ssParams);
      }

      if (swipeoutOpened) {
        f7.swipeout.open(el);
      }
    });
  },

  updated() {
    const self = this;
    const {
      $listEl
    } = self;
    if (!$listEl || $listEl && $listEl.length === 0) return;
    const isMedia = $listEl.hasClass('media-list');
    const isSimple = $listEl.hasClass('simple-list');
    const isSortable = $listEl.hasClass('sortable');

    if (isMedia !== self.state.isMedia) {
      self.setState({
        isMedia
      });
    }

    if (isSimple !== self.state.isSimple) {
      self.setState({
        isSimple
      });
    }

    if (isSortable !== self.state.isSortable) {
      self.setState({
        isSortable
      });
    }
  },

  beforeDestroy() {
    const self = this;
    const {
      el,
      linkEl
    } = self.$refs;
    const {
      link,
      href,
      smartSelect,
      swipeout,
      accordionItem
    } = self.props;
    const needsEvents = !(link || href || accordionItem || smartSelect);

    if (!needsEvents && linkEl) {
      linkEl.removeEventListener('click', self.onClick);
    }

    if (el) {
      if (swipeout) {
        el.removeEventListener('swipeout:open', self.onSwipeoutOpen);
        el.removeEventListener('swipeout:opened', self.onSwipeoutOpened);
        el.removeEventListener('swipeout:close', self.onSwipeoutClose);
        el.removeEventListener('swipeout:closed', self.onSwipeoutClosed);
        el.removeEventListener('swipeout:delete', self.onSwipeoutDelete);
        el.removeEventListener('swipeout:deleted', self.onSwipeoutDeleted);
        el.removeEventListener('swipeout:overswipeenter', self.onSwipeoutOverswipeEnter);
        el.removeEventListener('swipeout:overswipeexit', self.onSwipeoutOverswipeExit);
        el.removeEventListener('swipeout', self.onSwipeout);
      }

      if (accordionItem) {
        el.removeEventListener('accordion:beforeopen', self.onAccBeforeOpen);
        el.removeEventListener('accordion:open', self.onAccOpen);
        el.removeEventListener('accordion:opened', self.onAccOpened);
        el.removeEventListener('accordion:beforeclose', self.onAccBeforeClose);
        el.removeEventListener('accordion:close', self.onAccClose);
        el.removeEventListener('accordion:closed', self.onAccClosed);
      }
    }

    if (smartSelect && self.f7SmartSelect) {
      self.f7SmartSelect.destroy();
    }
  },

  methods: {
    onClick(event) {
      const self = this;

      if (event.target.tagName.toLowerCase() !== 'input') {
        self.dispatchEvent('click', event);
      }
    },

    onSwipeoutOverswipeEnter(event) {
      this.dispatchEvent('swipeout:overswipeenter swipeoutOverswipeEnter', event);
    },

    onSwipeoutOverswipeExit(event) {
      this.dispatchEvent('swipeout:overswipeexit swipeoutOverswipeExit', event);
    },

    onSwipeoutDeleted(event) {
      this.dispatchEvent('swipeout:deleted swipeoutDeleted', event);
    },

    onSwipeoutDelete(event) {
      this.dispatchEvent('swipeout:delete swipeoutDelete', event);
    },

    onSwipeoutClose(event) {
      this.dispatchEvent('swipeout:close swipeoutClose', event);
    },

    onSwipeoutClosed(event) {
      this.dispatchEvent('swipeout:closed swipeoutClosed', event);
    },

    onSwipeoutOpen(event) {
      this.dispatchEvent('swipeout:open swipeoutOpen', event);
    },

    onSwipeoutOpened(event) {
      this.dispatchEvent('swipeout:opened swipeoutOpened', event);
    },

    onSwipeout(event) {
      this.dispatchEvent('swipeout', event);
    },

    onAccBeforeClose(event) {
      this.dispatchEvent('accordion:beforeclose accordionBeforeClose', event, event.detail.prevent);
    },

    onAccClose(event) {
      this.dispatchEvent('accordion:close accordionClose', event);
    },

    onAccClosed(event) {
      this.dispatchEvent('accordion:closed accordionClosed', event);
    },

    onAccBeforeOpen(event) {
      this.dispatchEvent('accordion:beforeopen accordionBeforeOpen', event, event.detail.prevent);
    },

    onAccOpen(event) {
      this.dispatchEvent('accordion:open accordionOpen', event);
    },

    onAccOpened(event) {
      this.dispatchEvent('accordion:opened accordionOpened', event);
    },

    onChange(event) {
      this.dispatchEvent('change', event);
    },

    onInput(event) {
      this.dispatchEvent('input', event);
    },

    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    },

    setState(updater, callback) {
      __vueComponentSetState(this, updater, callback);
    }

  },
  computed: {
    props() {
      return __vueComponentProps(this);
    }

  }
};