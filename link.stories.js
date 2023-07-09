import './link.js';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                  DEFINE THE STORY CONTROLS / PROPS / ETC                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

export default {
  title: 'LondonParkour/Links/Link',
  component: '<ldnpk-link></ldnpk-link>',
  tags: ['autodocs'],

  // Docs Page Description
  parameters: {
    docs: {
      description: {
        component:
          'The LondonParkour Link Component.',
      },
    },
  },

  // ╭─────────────────────────────────────────────────────╮
  // │                 ARGUMENTS (CONTROLS)                │
  // ╰─────────────────────────────────────────────────────╯
  argTypes: {

    title: {
      control: 'text',
      description: 'Title attribute for the button.',
      table: { defaultValue: { summary: "link" } },
    },

    target: {
      control: 'select',
      options: ["_self", "_blank", "_parent", "_top"],
      description: 'DO NOT send to `_blank` for good SEO.',
      table: { defaultValue: { summary: "_self" } },
    },

    rel: {
      control: 'multi-select',
      options: [
        "nofollow",
        "noopener",
        "noreferrer",
        "directory",
        "tag",
        "help",
        "ugc",
        "sponsored"
      ],
      description: 'Link relationship to target.',
      table: { defaultValue: { summary: "" } },
    },

  },


  // ╭─────────────────────────────────────────────────────╮
  // │                   ARGUMENT DEFAULTS                 │
  // ╰─────────────────────────────────────────────────────╯
  args: {
    title: 'this is a link',
    target: '_self',
  },


};



// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({ title, target, rel }) => {

  let htmlString = /* html */`

    <ldnpk-link 
      href="https://londonparkour.com" 
      target="${target}" 
      rel="${rel}">

        ${title}

    </ldnpk-link>
  `

  return htmlString;

};


// Change the argument defaults for this example
Default.args = {

};

