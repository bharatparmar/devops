tt_content.gridelements_pi1.20.10.setup {


  # NewsDetail 2Column
  1 <  lib.gridelements.defaultGridSetup
  1.wrap = <div class="container"><div class="row">|</div></div>
  1 {
    columns {
      1 < .default
      1.wrap = <div class="col-md-6">|</div>

      2 < .default
      2.wrap =  <div class="col-md-6">|</div>

      3 < .default
      3.wrap = <div class="col-md-6">|</div>

      4 < .default
      4.wrap =  <div class="col-md-6">|</div>

    }
  }
}

// lib.stdheader = COA
// lib.stdheader {
//   10 = TEXT
//   10 {
//     field = header
//     htmlspecialChars = 1
//     typolink.parameter.field = header_link
//     dataWrap = <h{field:header_layout}>|</h{field:header_layout}>
//     dataWrap {
//       override = <h{$content.defaultHeaderType}>|</h{$content.defaultHeaderType}>
//       override.if.isFalse.field = header_layout
//     }
//   }
// }

// tt_content.gridelements_pi1 {
//   10 =< lib.stdheader
//   20 = COA
//   20 {
//     10 = USER
//     10 {
//       userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
//       setup {
//         default < lib.gridelements.defaultGridSetup
//       }
//     }
//   }
// }