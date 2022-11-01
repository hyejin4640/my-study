from functools import partial
from secrets import choice
import tkinter
from turtle import bgcolor, color
import random

exList = list()
key = 0

def ExNumberChoice():
  global key, choiceBtn
  key = 1

def ExNumber(index):
  global exBtn, exList
  exList.append(index)
  exBtn[index].config(bg="#FFAAAA")

def LottoA():
  global btnA, exList

  lotto_num = list()

  if key == 0 :
    lotto_num = random.sample(range(0, 45), 6)

  else :
    lotto_num = random.sample(exList, 6)

  for i in range(0, 45):
    btnA[i].config(bg="#FFFFFF")

  for i in range(0, 6) :
    btnA[lotto_num[i]].config(bg="#FFAAAA")

def LottoB():
  global btnB, exList

  lotto_num = list()

  if key == 0 :
    lotto_num = random.sample(range(0, 45), 6)

  else :
    lotto_num = random.sample(exList, 6)

  for i in range(0, 45):
    btnB[i].config(bg="#FFFFFF")

  for i in range(0, 6) :
    btnB[lotto_num[i]].config(bg="#FFAAAA")

def LottoC():
  global btnC, exList

  lotto_num = list()

  if key == 0 :
    lotto_num = random.sample(range(0, 45), 6)

  else :
    lotto_num = random.sample(exList, 6)

  for i in range(0, 45):
    btnC[i].config(bg="#FFFFFF")

  for i in range(0, 6) :
    btnC[lotto_num[i]].config(bg="#FFAAAA")

def LottoD():
  global btnD, exList

  lotto_num = list()

  if key == 0 :
    lotto_num = random.sample(range(0, 45), 6)

  else :
    lotto_num = random.sample(exList, 6)

  for i in range(0, 45):
    btnD[i].config(bg="#FFFFFF")

  for i in range(0, 6) :
    btnD[lotto_num[i]].config(bg="#FFAAAA")

def CancelEX():
  global exBtn, choiceBtn, exList

  key = 0
  exList = list()

  choiceBtn.config(bg="#FFFFFF")

  for i in range(0, 45):
    exBtn[i].config(bg="#FFFFFF")

def CancelA():
  global btnA

  for i in range(0, 45):
    btnA[i].config(bg="#FFFFFF")

def CancelB():
  global btnB

  for i in range(0, 45):
    btnB[i].config(bg="#FFFFFF")

def CancelC():
  global btnC

  for i in range(0, 45):
    btnC[i].config(bg="#FFFFFF")

def CancelD():
  global btnD

  for i in range(0, 45):
    btnD[i].config(bg="#FFFFFF")

window = tkinter.Tk()
window.geometry("1710x600")

wrapLbl = tkinter.Button(window)
wrapLbl.place(x=10, y=10, width=300, height=550)
wrapLbl.config(relief="solid")

exLabel = tkinter.Label(window, bg="#999999")
exLabel.place(x=10, y=20, width=300, height=30)
exLabel.config(text="예상번호")

exBtn = list()
cnt = 0

for j in range(0, 7):
  for k in range(0, 7):
    exBtn.append(tkinter.Button(window, bg="white"))
    exBtn[cnt].config(text=cnt+1, command=partial(ExNumber, cnt))
    exBtn[cnt].place(x=25+k*40, y=70+j*60, height=50, width=30)
    
    cnt = cnt + 1
    
    if (cnt == 45):
      break

choiceBtn = tkinter.Button(window, command=ExNumberChoice)
choiceBtn.place(x=25, y=500, width=100, height=30)
choiceBtn.config(text="선택")

cancelBtn = tkinter.Button(window, command=CancelEX)
cancelBtn.place(x=135, y=500, width=160, height=30)
cancelBtn.config(text="취소")

btnA = list()
cnt = 0

wrapLblA = tkinter.Button(window)
wrapLblA.place(x=425, y=10, width=300, height=550)
wrapLblA.config(relief="solid")

exLabelA = tkinter.Label(window, bg="#999999")
exLabelA.place(x=425, y=20, width=300, height=30)
exLabelA.config(text="A")

for j in range(0, 7):
  for k in range(0, 7):
    btnA.append(tkinter.Button(window, bg="white"))
    btnA[cnt].config(text=cnt+1, command=partial(ExNumber, cnt))
    btnA[cnt].place(x=440+k*40, y=70+j*60, height=50, width=30)
    
    cnt = cnt + 1
    
    if (cnt == 45):
      break

choiceBtnA = tkinter.Button(window, command=LottoA)
choiceBtnA.place(x=440, y=500, width=100, height=30)
choiceBtnA.config(text="선택")

cancelBtnA = tkinter.Button(window, command=CancelA)
cancelBtnA.place(x=550, y=500, width=160, height=30)
cancelBtnA.config(text="취소")

btnB = list()
cnt = 0

wrapLblB = tkinter.Button(window)
wrapLblB.place(x=750, y=10, width=300, height=550)
wrapLblB.config(relief="solid")

exLabelB = tkinter.Label(window, bg="#999999")
exLabelB.place(x=750, y=20, width=300, height=30)
exLabelB.config(text="B")

for j in range(0, 7):
  for k in range(0, 7):
    btnB.append(tkinter.Button(window, bg="white"))
    btnB[cnt].config(text=cnt+1, command=partial(ExNumber, cnt))
    btnB[cnt].place(x=765+k*40, y=70+j*60, height=50, width=30)
    
    cnt = cnt + 1
    
    if (cnt == 45):
      break

choiceBtnB = tkinter.Button(window)
choiceBtnB.place(x=765, y=500, width=100, height=30)
choiceBtnB.config(text="선택", command=LottoB)

cancelBtnB = tkinter.Button(window, command=CancelB)
cancelBtnB.place(x=875, y=500, width=160, height=30)
cancelBtnB.config(text="취소")

wrapLblC = tkinter.Button(window)
wrapLblC.place(x=1075, y=10, width=300, height=550)
wrapLblC.config(relief="solid")

exLabelC = tkinter.Label(window, bg="#999999")
exLabelC.place(x=1075, y=20, width=300, height=30)
exLabelC.config(text="C")

btnC = list()
cnt = 0

for j in range(0, 7):
  for k in range(0, 7):
    btnC.append(tkinter.Button(window, bg="white"))
    btnC[cnt].config(text=cnt+1, command=partial(ExNumber, cnt))
    btnC[cnt].place(x=1090+k*40, y=70+j*60, height=50, width=30)
    
    cnt = cnt + 1
    
    if (cnt == 45):
      break

choiceBtnC = tkinter.Button(window)
choiceBtnC.place(x=1090, y=500, width=100, height=30)
choiceBtnC.config(text="선택", command=LottoC)

cancelBtnC = tkinter.Button(window, command=CancelC)
cancelBtnC.place(x=1200, y=500, width=160, height=30)
cancelBtnC.config(text="취소")

wrapLblD = tkinter.Button(window)
wrapLblD.place(x=1400, y=10, width=300, height=550)
wrapLblD.config(relief="solid")

exLabelD = tkinter.Label(window, bg="#999999")
exLabelD.place(x=1400, y=20, width=300, height=30)
exLabelD.config(text="D")

btnD = list()
cnt = 0

for j in range(0, 7):
  for k in range(0, 7):
    btnD.append(tkinter.Button(window, bg="white"))
    btnD[cnt].config(text=cnt+1, command=partial(ExNumber, cnt))
    btnD[cnt].place(x=1415+k*40, y=70+j*60, height=50, width=30)
    
    cnt = cnt + 1
    
    if (cnt == 45):
      break

choiceBtnD = tkinter.Button(window)
choiceBtnD.place(x=1415, y=500, width=100, height=30)
choiceBtnD.config(text="선택", command=LottoD)

cancelBtnD = tkinter.Button(window, command=CancelD)
cancelBtnD.place(x=1525, y=500, width=160, height=30)
cancelBtnD.config(text="취소")

window.mainloop()