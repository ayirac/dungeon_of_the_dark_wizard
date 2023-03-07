from tkinter import *
from PIL import Image, ImageTk


# Sample game layout using tkinter grids
winSize = (800, 500)

root = Tk()
root.title("Dungeons of the Dark Wizard")

canvas = Canvas(root, width=winSize[0] * 0.8, height=winSize[1] * 0.65)
canvas.grid(row=0, column=0)
imgFile = Image.open("assets/images/sun.png")

resizedImage = imgFile.resize((int(winSize[0] * 0.8), int(winSize[1] * 0.65)), Image.LANCZOS)
newImg = ImageTk.PhotoImage(resizedImage)

canvas.create_image(0, 0, anchor='nw', image=newImg)

statFrame = Frame(root, bg='yellow', width=winSize[0]*0.2, height=winSize[1]*0.65)
actionFrame = Frame(root, bg='yellow', width=winSize[0]*0.8, height=winSize[1]*0.2)
buttonFrame = Frame(actionFrame, bg='green', width=(winSize[0]*0.8)*0.3, height=winSize[1]*0.2)
itemFrame = Frame(actionFrame, bg='red', width=(winSize[0]*0.8)*0.835, height=winSize[1]*0.2)

# Setup movement buttons
moveForwardBtn = Button(buttonFrame, text="^")
moveRightBtn = Button(buttonFrame, text=">")
moveLeftBtn = Button(buttonFrame, text="<")
moveBackBtn = Button(buttonFrame, text=".")
turnLeftBtn = Button(buttonFrame, text="2")
turnRightBtn = Button(buttonFrame, text="6")

turnLeftBtn.grid(row=0, column=0)
moveForwardBtn.grid(row=0, column=1)
turnRightBtn.grid(row=0, column=2)
moveLeftBtn.grid(row=1, column=0)
moveBackBtn.grid(row=1, column=1)
moveRightBtn.grid(row=1, column=2)

statFrame.grid(row=0, column=1)
actionFrame.grid(row=1, column=0, sticky='w')
buttonFrame.grid(row=0, column=0, sticky='w')
itemFrame.grid(row=0, column=1)
root.mainloop()