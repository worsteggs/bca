module.exports = {
  heatmapData : [
    {
      "z": [
        [
          -0.561,
          -0.54,
          -0.486,
          -0.721,
          -0.847,
          -0.662,
          -0.716,
          -0.731,
          -0.453,
          -0.721,
          0.341,
          -0.687,
          7.979,
          1.568,
          0.032,
          0.795,
          -0.117,
          0.379,
          -0.404,
          0.028,
          -0.138,
          -0.262,
          -0.715,
          -0.679,
          -0.431,
          -0.634,
          -0.418,
          -0.628
        ],
        [
          -0.588,
          -0.375,
          -0.538,
          -0.73,
          -0.628,
          -0.661,
          -0.63,
          -0.808,
          -0.471,
          -0.683,
          0.231,
          -0.894,
          7.968,
          1.363,
          -0.101,
          0.547,
          0.095,
          0.447,
          -0.413,
          0.075,
          -0.219,
          -0.172,
          -0.723,
          -0.647,
          -0.551,
          -0.631,
          -0.331,
          -0.598
        ],
        [
          -0.369,
          2.412,
          -0.533,
          -0.724,
          -0.267,
          -0.62,
          -0.856,
          -0.634,
          -0.732,
          -0.713,
          -0.487,
          -0.671,
          -0.598,
          -0.568,
          -0.288,
          -0.715,
          -0.716,
          -0.76,
          -0.484,
          0.28,
          -0.396,
          -0.516,
          -0.707,
          -0.64,
          -0.694,
          -0.645,
          -0.69,
          5.362
        ],
        [
          -0.38,
          1.535,
          -0.528,
          -0.681,
          -0.542,
          -0.647,
          -0.749,
          -0.561,
          -0.685,
          -0.734,
          -0.586,
          -0.611,
          -0.564,
          -0.553,
          -0.224,
          -0.708,
          -0.698,
          -0.739,
          -0.462,
          0.329,
          -0.385,
          -0.45,
          -0.699,
          -0.638,
          -0.614,
          -0.662,
          -0.657,
          5.003
        ],
        [
          10.503,
          1.47,
          -0.821,
          -1.083,
          -2.025,
          -1.011,
          -0.986,
          -1.196,
          -1.102,
          -1.176,
          -1.03,
          -1.073,
          -0.832,
          1.837,
          -0.637,
          -0.902,
          -0.976,
          -0.972,
          -0.661,
          2.93,
          -0.604,
          -0.595,
          -1.15,
          -1.091,
          -1.028,
          -0.982,
          -1.003,
          -0.784
        ],
        [
          10.697,
          2.952,
          -0.806,
          -1.01,
          -1.227,
          -0.967,
          -1.024,
          -1.233,
          -1.08,
          -1.129,
          -1.003,
          -1.023,
          -0.522,
          1.192,
          -0.613,
          -0.918,
          -0.973,
          -0.948,
          -0.54,
          2.609,
          -0.842,
          -0.204,
          -1.102,
          -1.008,
          -1.1,
          -1.027,
          -0.995,
          -0.636
        ],
        [
          -0.546,
          2.094,
          10.237,
          -0.612,
          -1.254,
          -0.599,
          -0.501,
          -0.621,
          -0.623,
          -0.677,
          -0.616,
          -0.624,
          -0.593,
          0.678,
          -0.475,
          -0.503,
          -0.558,
          -0.561,
          -0.415,
          1.399,
          -0.783,
          -0.228,
          -0.682,
          -0.668,
          -0.61,
          -0.6,
          -0.537,
          -0.562
        ],
        [
          -0.514,
          4.025,
          11.118,
          -0.539,
          -0.738,
          -0.596,
          -0.514,
          -0.703,
          -0.607,
          -0.635,
          -0.592,
          -0.664,
          -0.575,
          1.084,
          -0.514,
          -0.499,
          -0.559,
          -0.561,
          -0.406,
          1.759,
          -0.648,
          -0.118,
          -0.62,
          -0.6,
          -0.628,
          -0.563,
          -0.577,
          -0.519
        ]
      ],
      "x": [
        "cluster8",
        "cluster26",
        "cluster11",
        "cluster2",
        "cluster12",
        "cluster17",
        "cluster19",
        "cluster20",
        "cluster6",
        "cluster9",
        "cluster18",
        "cluster23",
        "cluster14",
        "cluster21",
        "cluster22",
        "cluster0",
        "cluster5",
        "cluster7",
        "cluster15",
        "cluster27",
        "cluster24",
        "cluster25",
        "cluster1",
        "cluster4",
        "cluster10",
        "cluster13",
        "cluster16",
        "cluster3"
      ],
      "y": [
        "human-LAMP5",
        "mouse-LAMP5",
        "human-PVALB",
        "mouse-PVALB",
        "human-SST",
        "mouse-SST",
        "human-VIP",
        "mouse-VIP"
      ],
      "type": "heatmap",
      "colorscale": [
        [
          0,
          "#330066"
        ],
        [
          0.25,
          "#336699"
        ],
        [
          0.5,
          "#66CC66"
        ],
        [
          1,
          "#FFCC33"
        ]
      ],
      "hoverongaps": false,
      "hovertemplate": "Cluster: %{x}<br>Gene: %{y}<br>Mean: %{z}",
      "name": "human & mouse"
    }
  ],
  textColor: [
    "<span style=\"color:#CDD796\">C8(Inh_SST)</span>",
    "<span style=\"color:#CDD796\">C26(Inh_SST)</span>",
    "<span style=\"color:#C4AFD2\">C11(Inh_VIP)</span>",
    "<span style=\"color:#FDDD8D\">C2(Exc_FEZF2)</span>",
    "<span style=\"color:#FDDD8D\">C12(Exc_FEZF2)</span>",
    "<span style=\"color:#FDDD8D\">C17(Exc_FEZF2)</span>",
    "<span style=\"color:#FDDD8D\">C19(Exc_FEZF2)</span>",
    "<span style=\"color:#FDDD8D\">C20(Exc_FEZF2)</span>",
    "<span style=\"color:#FEF4C9\">C6(Exc_THEMIS)</span>",
    "<span style=\"color:#FEF4C9\">C9(Exc_THEMIS)</span>",
    "<span style=\"color:#FEF4C9\">C18(Exc_THEMIS)</span>",
    "<span style=\"color:#FEF4C9\">C23(Exc_THEMIS)</span>",
    "<span style=\"color:#9DBFA2\">C14(Inh_LAMP5)</span>",
    "<span style=\"color:#9DBFA2\">C21(Inh_LAMP5)</span>",
    "<span style=\"color:#C2ABC0\">C22(Nnc_Astro)</span>",
    "<span style=\"color:#E3CDDA\">C0(Exc_LAMP5)</span>",
    "<span style=\"color:#E3CDDA\">C5(Exc_LAMP5)</span>",
    "<span style=\"color:#E3CDDA\">C7(Exc_LAMP5)</span>",
    "<span style=\"color:#9189A5\">C15(Nnc_Oligo)</span>",
    "<span style=\"color:#9189A5\">C27(Nnc_Oligo)</span>",
    "<span style=\"color:#98B994\">C24(Nnc_Micro)</span>",
    "<span style=\"color:#CEAABD\">C25(Nnc_OPC)</span>",
    "<span style=\"color:#B0CAC7\">C1(Exc_RORB)</span>",
    "<span style=\"color:#B0CAC7\">C4(Exc_RORB)</span>",
    "<span style=\"color:#B0CAC7\">C10(Exc_RORB)</span>",
    "<span style=\"color:#B0CAC7\">C13(Exc_RORB)</span>",
    "<span style=\"color:#B0CAC7\">C16(Exc_RORB)</span>",
    "<span style=\"color:#E16C3F\">C3(Inh_PVALB)</span>"
  ]
}
