module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'homeBG': "url('/src/assets/images/bg.png')",
        'appointmentBG': "url('/src/assets/images/appointment.png')",
        'footerBG': "url('/src/assets/images/footer.png')"
      })

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },

      },
      "cupcake",
    ],
  },
}
