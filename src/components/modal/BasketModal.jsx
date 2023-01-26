import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";

const BasketModal = ({ closeModal, openModal }) => {
  const [step, setStep] = useState(1);

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="!p-8">
          {step === 1 && (
            <>
              <div className="text-center text-2xl">ДОБРО ПОЖАЛОВАТЬ</div>
              <div className="my-6">
                Чтобы продолжить оформление рассрочки "Giper-Mart" пожалуеста
                введите номер телефона с которого регестрировались в сиситеме
                Paymart. Если вы не регистрировалиь то пожалуеста введите номер
                телефона к которой привязана ваша банковская карта.
              </div>
              <Button
                className="yellow-btn-hover !w-full !rounded-none !py-3 !text-base"
                onClick={() => {
                  setStep(2);
                }}
                autoFocus
              >
                Далее
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="text-2xl f-medium mb-2">Купить в рассрочку</div>
              <div>Мобилный номер</div>
              <TextField
                className="!rounded-none w-full !my-4"
                id="outlined-required"
                defaultValue="+998 __ ___ __ __"
              />
              <Button className="yellow-btn-hover !py-3 !w-full !rounded-none">
                Далее
              </Button>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default BasketModal;
