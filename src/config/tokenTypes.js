export default {
  sizing: {
    label: 'Size',
    property: 'Size',
    type: 'sizing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  spacing: {
    label: 'Space',
    property: 'Value',
    type: 'spacing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  color: {
    label: 'Colors',
    property: 'Color',
    type: 'color',
    schema: {
      value: 'color',
      options: {
        description: '',
      },
    },
    help:
      "If a (local) style is found with the same name it will match to that, if not, will use hex value. Use 'Create Style' to batch-create styles from your tokens (e.g. in your design library). In the future we'll load all 'remote' styles and reference them inside the JSON.",
  },
  borderRadius: {
    label: 'Border Radius',
    property: 'Border Radius',
    type: 'borderRadius',
    schema: {
      options: {
        description: '',
      },
    },
  },
  borderWidth: {
    label: 'Border Width',
    property: 'Border Width',
    type: 'borderWidth',
    explainer: 'Enter as a number, e.g. 4',
    schema: {
      options: {
        description: '',
      },
    },
  },
  opacity: {
    label: 'Opacity',
    property: 'Opacity',
    type: 'opacity',
    explainer: 'Set as 50% or 0.5',
    schema: {
      options: {
        description: '',
      },
    },
  },
  boxShadow: {
    label: 'Box Shadow',
    property: 'Box Shadow',
    type: 'boxShadow',
    schema: {
      value: {
        x: '0',
        y: '0',
        blur: '0',
        spread: '0',
        color: '#000000',
        type: 'dropShadow',
      },
      options: {
        description: '',
      },
    },
  },
  typography: {
    label: 'Typography',
    property: 'Typography',
    type: 'typography',
    schema: {
      value: {
        fontFamily: 'Inter',
        fontWeight: 'Regular',
        lineHeight: 'AUTO',
        fontSize: '18',
        letterSpacing: '0%',
        paragraphSpacing: '0',
        textDecoration: 'none',
        textCase: 'none',
      },
      options: {
        description: '',
      },
    },
    help:
      "If a (local) style is found with the same name it will match to that, if not, will use raw font values. Use 'Create Style' to batch-create styles from your tokens (e.g. in your design library). In the future we'll load all 'remote' styles and reference them inside the JSON.",
  },
  fontFamilies: {
    help: 'Only works in combination with a Font Weight',
    label: 'Font Families',
    property: 'Font Family',
    type: 'fontFamilies',
    schema: {
      options: {
        description: '',
      },
    },
  },
  fontWeights: {
    help: 'Only works in combination with a Font Family',
    label: 'Font Weights',
    property: 'Font Weight',
    type: 'fontWeights',
    schema: {
      options: {
        description: '',
      },
    },
  },
  lineHeights: {
    label: 'Line Heights',
    explainer: 'e.g. 100% or 14',
    property: 'Line Height',
    type: 'lineHeights',
    schema: {
      options: {
        description: '',
      },
    },
  },
  fontSizes: {
    label: 'Font Sizes',
    property: 'Font Size',
    type: 'fontSizes',
    schema: {
      options: {
        description: '',
      },
    },
  },
  letterSpacing: {
    label: 'Letter Spacing',
    property: 'Letter Spacing',
    type: 'letterSpacing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  paragraphSpacing: {
    label: 'Paragraph Spacing',
    property: 'ParagraphSpacing',
    type: 'paragraphSpacing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  textCase: {
    label: 'Text Case',
    property: 'TextCase',
    type: 'textCase',
    schema: {
      options: {
        description: '',
      },
    },
    explainer: 'none | uppercase | lowercase | capitalize',
  },
  textDecoration: {
    label: 'Text Decoration',
    property: 'TextDecoration',
    type: 'textDecoration',
    schema: {
      options: {
        description: '',
      },
    },
    explainer: 'none | underline | line-through',
  },
  other: {
    label: 'Other',
    property: 'other',
    type: 'other',
    schema: {
      options: {
        description: '',
      },
    },
  },
};
