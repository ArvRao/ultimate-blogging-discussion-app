import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { AppBar, Toolbar, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem, ListItemText, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Header from '../components/layouts/Header'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   height: 900,
//   lineHeight: "60px",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "35ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function Elevation() {
  const menuItems = [
    { label: "Recent posts", path: "/" },
    { label: "My blogs", path: "/about" },
    { label: "My discussions", path: "/Contact" },
    { label: "Profile", path: "/" },
  ];

  return (
    <Box>
      <Header />
      <Divider />
      <br />
      <br />

      <Grid container className="homePage">
        <Box
          sx={{
            paddingTop: 2,
            padding: 2,
            // bgcolor: "#7cc7d6",
            display: "grid",
            // gap: 2,
          }}
        >
          <Toolbar>
            <Search className="rounded-full bg-blue-100">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search anything here"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
          <Typography
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            All the main stuff like the blogs and discussions happen here
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Divider orientation="vertical"></Divider>
            <Grid item xs={8}>
              <Box>
                <div className="p-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i}>
                      <div className="p-2 text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                        <center>Item {i} title</center>
                      </div>
                    </div>
                  ))}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt eius placeat qui vel hic vero adipisci consequatur
                  sunt eum aperiam dolores atque ut, reprehenderit officia
                  corporis quo tempore ex, saepe doloremque. Consequuntur, quas
                  maiores earum labore consequatur magni quod vel corporis amet
                  sed ipsa modi voluptatibus quibusdam consectetur aut molestias
                  sequi eos voluptas dignissimos temporibus beatae ipsum nobis
                  omnis asperiores? Quaerat libero labore, ab exercitationem
                  voluptate magnam eius quibusdam ad at, unde voluptas, numquam
                  dolorum ullam iure. Eveniet quaerat impedit voluptatem
                  quisquam sit laborum ullam a? Aliquam nostrum neque non
                  aliquid corrupti debitis, quis optio quisquam! Temporibus
                  culpa repellat suscipit sint numquam nemo fugiat obcaecati
                  cupiditate eius est, beatae quod ullam ratione possimus
                  dignissimos cum maiores adipisci inventore asperiores esse
                  provident maxime nisi incidunt porro. Alias natus quidem
                  mollitia impedit unde tenetur blanditiis perspiciatis dolorum
                  libero commodi amet esse, et neque velit deleniti molestiae
                  optio error aut autem quo facilis. Odit rerum minus sit
                  recusandae unde architecto magnam qui voluptatem, ab facere ad
                  impedit ratione eligendi pariatur, fugiat aspernatur. Facilis
                  sint accusantium dolores aspernatur illo hic, fugit odit
                  quisquam obcaecati ipsam, eos unde veritatis. Minus id fugiat
                  magnam omnis et. Natus distinctio iusto veniam, debitis,
                  praesentium suscipit voluptatum odio accusantium facere quas
                  enim aut eaque nobis amet perspiciatis culpa sunt, magni et
                  modi recusandae maiores vel necessitatibus earum nostrum.
                  Omnis voluptatibus fugit autem, architecto quae, voluptas
                  officia itaque quidem ratione deleniti repellat unde veniam,
                  consectetur adipisci. Sed eum, itaque dolores iste ipsa error
                  inventore qui animi dicta corporis explicabo delectus
                  temporibus ratione exercitationem voluptatum non magnam
                  dolorem laborum? Quo ipsam vel repellat doloremque dolores
                  sint dolorem sequi, libero fugit excepturi, quos, numquam
                  soluta. Voluptatem ex velit dolore maiores quibusdam rerum!
                  Non fugit sed asperiores quas pariatur vel dignissimos totam
                  quis enim unde explicabo fugiat, ipsum, eius modi ut omnis
                  sequi necessitatibus officia! Quasi tempora voluptates
                  repellat, minus modi magni veritatis ut odio saepe cumque
                  praesentium asperiores incidunt. Dolorum eligendi aperiam
                  nostrum dignissimos modi maiores illo consectetur impedit id
                  enim possimus aspernatur reprehenderit voluptatibus, in
                  officia iste quasi amet. Ad praesentium architecto quia. Natus
                  omnis suscipit veniam odio. Possimus delectus, eveniet
                  perferendis quos culpa tenetur vel quidem vitae, consequatur
                  illum, corrupti esse quibusdam quia necessitatibus reiciendis
                  beatae harum mollitia laboriosam placeat ducimus saepe
                  repellat? Eum delectus expedita, accusantium unde, ipsum
                  similique nulla temporibus repellat quidem quis laudantium
                  porro? Labore doloremque quas quo quaerat et cupiditate
                  excepturi molestiae ullam dolore cum debitis repellat fugiat
                  provident mollitia saepe asperiores, exercitationem recusandae
                  eum enim quia fugit. Recusandae temporibus velit dolores
                  voluptatem omnis sequi esse amet delectus laborum magni,
                  laudantium reprehenderit earum, tenetur, exercitationem fugiat
                  soluta? Cupiditate, placeat. Suscipit nobis nam cumque
                  voluptas dolores! Provident, laboriosam commodi quas esse
                  dolorum pariatur dolores adipisci asperiores aspernatur quo
                  debitis facere nemo dignissimos quos sint veniam nulla quam
                  rerum eos quidem delectus maxime blanditiis? Dolores molestias
                  perspiciatis voluptate obcaecati. Esse iure nobis dolor quidem
                  repudiandae sit saepe in, tempore earum sunt omnis a dolore
                  illum veritatis nesciunt eaque aliquam! Enim expedita tenetur
                  totam unde dolores aliquid provident nesciunt distinctio
                  suscipit, dolor rerum tempora impedit fugiat quibusdam odit
                  soluta sit molestias illo nisi! Ea necessitatibus maxime iure
                  porro et libero quos cumque autem in molestias delectus omnis
                  culpa eligendi, laudantium pariatur modi itaque ex dolorem
                  impedit quis. Itaque omnis laboriosam aliquam, voluptates,
                  magni quo non eaque tempora eos, minus natus corrupti? Animi,
                  ullam quod. In quidem architecto non vel! Laudantium natus
                  amet, quas aspernatur qui nulla sint cupiditate voluptatum
                  fugit repellat beatae, doloribus iste dignissimos numquam
                  accusantium veritatis ad quia sapiente iure vero doloremque.
                  Corporis architecto temporibus soluta hic consectetur harum
                  perferendis. Ducimus quis inventore repellendus maxime itaque
                  vel vitae obcaecati voluptate, consectetur blanditiis tempora
                  aperiam voluptates corporis repellat rerum, velit suscipit
                  molestiae dolores! Quisquam eum ipsam minus doloribus vitae
                  dolorum saepe debitis aperiam. Optio ab aspernatur saepe natus
                  quo, ad ut nulla, molestiae at exercitationem aliquam alias?
                  Quia, obcaecati ipsum quas earum cupiditate id perspiciatis
                  dignissimos labore aspernatur laborum vero nisi voluptatum
                  aperiam nam optio sint, neque omnis tempore commodi modi,
                  mollitia totam quos. Pariatur perferendis repudiandae sunt?
                  Eius, consectetur magni debitis explicabo asperiores fugiat
                  aut voluptate blanditiis illo dolores quod necessitatibus ad
                  cum delectus corrupti neque repudiandae pariatur quam
                  doloribus expedita aliquam vero eligendi? Minima quidem
                  voluptate aspernatur optio nobis voluptatem odio, illum sit
                  quis quo pariatur exercitationem consequatur facilis
                  accusantium porro saepe et perspiciatis temporibus maxime.
                  Perspiciatis nisi alias ullam ea sed error tenetur voluptas
                  nulla mollitia consequatur quia atque ratione nesciunt vero
                  nemo distinctio velit quae, reiciendis rem magni ipsa odio
                  delectus molestias. Assumenda voluptatibus earum quisquam, non
                  eius magni placeat perspiciatis fugit nulla, ipsum deserunt
                  enim quaerat maxime, itaque ipsam aspernatur est quo velit
                  totam. Quibusdam unde aut perspiciatis omnis accusamus
                  praesentium natus fuga doloremque, veniam ipsa, optio
                  excepturi quidem perferendis saepe iste odio modi! Optio iste
                  eaque alias assumenda non voluptates est, totam porro illo,
                  sint ad magni dolore officia blanditiis? Ad et voluptates in
                  molestiae, odio sint ut placeat, maxime ratione debitis magnam
                  fuga. Numquam voluptatem laborum obcaecati sapiente odio in
                  error. Tempore nihil unde dolores et culpa, officia nemo
                  quisquam perspiciatis vel quasi delectus labore repellat
                  fugiat placeat autem reiciendis optio illum sequi quia fugit.
                  Iste laborum nostrum sequi obcaecati provident consequuntur
                  dolorum voluptatum, excepturi cum, quod quo, voluptatibus
                  mollitia eius. Eos eius fugit ipsam dolor earum a unde
                  explicabo? Beatae eaque perferendis nemo consequuntur voluptas
                  tempore incidunt deserunt dolor tempora ex placeat, dolorum
                  quod at quaerat quisquam id expedita saepe quas porro!
                  Corrupti, aliquid tempora officia quidem nobis maxime
                  incidunt! Consequuntur recusandae odit ullam nihil libero
                  repellendus magni. Accusantium incidunt error natus quaerat.
                  Eius, ducimus quisquam, ratione laborum dolores perferendis
                  quas sequi in repudiandae accusantium distinctio minima
                  tempore iure, quam reiciendis. Quae eos animi eveniet, neque
                  ipsum cum enim. Similique et dolor quasi quae sequi! Commodi,
                  reprehenderit perferendis reiciendis sit delectus maiores amet
                  quaerat ab suscipit magnam cupiditate earum recusandae atque
                  ea est, tenetur aspernatur veritatis ducimus iusto repellendus
                  pariatur. Adipisci quasi qui consequatur assumenda accusamus,
                  nemo quam porro, tempora eaque autem natus! Quis sint
                  molestiae earum perspiciatis quaerat esse.
                </div>
              </Box>
            </Grid>
            <Divider orientation="vertical"></Divider>
            <Grid item xs={3}>
              <Box className="sticky top-20 col-span-4 flex h-[90vh] flex-col p-3">
                <center>
                  <div className="p-2">
                    <Typography variant="h6" component="div" className="p-1">
                      People you might be interested in{" "}
                    </Typography>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i}>
                        <div className="text-1xl text-gray-800 decoration-indigo-600 group-hover:underline">
                          Person {i + 1} profile
                          <Button className="rounded-full pl-7">
                            Follow
                          </Button>{" "}
                          <Divider />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Typography variant="h4" component="div" className="p-1">
                      <Box sx={{
                        paddingTop: 2,
                      }}>
                      My bookmarks{" "}
                      </Box>
                    </Typography>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                          Bookmark {i + 1} link
                        </div>
                      </div>
                    ))}
                  </div>
                </center>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* <div>Arvind D &#x2023; All copyrights reserved</div> */}
    </Box>
  );
}
