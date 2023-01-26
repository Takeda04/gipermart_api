import React from "react";
import SecondNavbar from "../../layout/navbar/SecondNavbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "@mui/system";
import "../../assets/scss/_filter.scss";
import { Link } from "react-router-dom";
import { FormControlLabel, OutlinedInput } from "@mui/material";
import { IoLogoUsd } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import Title from "../../components/title/Title";
import Cart from "../../components/cart/Cart";

const Filter = () => {
  return (
    <>
      <SecondNavbar />
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-12 grid-cols-6 gap-4 filter my-12">
          <div className="lg:col-span-3 col-span-6">
            <div>
              <Accordion className="all-category">
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Все категории</Typography>
                </AccordionSummary>
                <Link to="" className="item">
                  Духовые шкафы
                </Link>
                <Link to="" className="item">
                  Духовые шкафы
                </Link>
                <Link to="" className="item">
                  Духовые шкафы
                </Link>
                <Link to="" className="item">
                  Духовые шкафы
                </Link>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Бренд</Typography>
                </AccordionSummary>
                <div className="all-category">
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                </div>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Цвет</Typography>
                </AccordionSummary>
                <div className="all-category">
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                </div>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography>Объем камеры</Typography>
                </AccordionSummary>
                <div className="all-category">
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                  <label className="item">
                    <FormControlLabel control={<Checkbox />} label="Label" />
                  </label>
                </div>
              </Accordion>
              <Accordion className="filter-price !my-4">
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography>Цена</Typography>
                </AccordionSummary>
                <AccordionSummary>
                  <div className="grid grid-cols-2 gap-6">
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      placeholder="0"
                      type="number"
                      startAdornment={
                        <IoLogoUsd className="mr-2" position="start">
                          $
                        </IoLogoUsd>
                      }
                    />
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      placeholder="10000"
                      type="number"
                      startAdornment={
                        <IoLogoUsd className="mr-2" position="start">
                          $
                        </IoLogoUsd>
                      }
                    />
                  </div>
                </AccordionSummary>
              </Accordion>
            </div>
          </div>
          <div className="lg:col-span-9 col-span-6">
            <Title title="Морозильные камеры" style="f-medium mb-4" />
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2">
              <Cart />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Filter;
