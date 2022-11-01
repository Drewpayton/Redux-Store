from tkinter import Button
import random
import settings


class Cell:
    all = []

    def __init__(self, x, y, is_mine=False):
        self.is_mine = is_mine
        self.cell_btn_object = None
        self.x = x
        self.y = y

        # Append the object to the Cell.all list
        Cell.all.append(self)

    def create_btn_object(self, location):
        btn = Button(
            location,
            width=12,
            height=4,
        )
        btn.bind('<Button-1>', self.left_click_actions)  # Left Click
        btn.bind('<Button-3>', self.right_click_actions)  # Right Click
        self.cell_btn_object = btn

    def left_click_actions(self, event):
        if self.is_mine:
            self.show_mine()
        else:
            self.show_cell()

    def show_mine(self):
        # A logic to interrupt the game and display a message that player lost
        self.cell_btn_object.configure(bg='red')

    def show_cell(self):
        pass

    def right_click_actions(self, event):
        print("I am right clicked!")

    @staticmethod
    def randomize_mines():
        picked_cells = random.sample(
            Cell.all,
            settings.MINES_COUNT
        )

        for picked_cell in picked_cells:
            picked_cell.is_mine = True

    def __repr__(self):
        return f"Cell({self.x}, {self.y})"
