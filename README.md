# Imjoy Starter Tutorial
A Tutorial for Imjoy implmentation. With instruction of this tutorial, you can do Interactive Image Analysis with ImJoy and Jupyter Notebooks. You can practice by running the tutorial in Jupyter Notebooks or clicking the link and run in MyBinder or Google Colab. 
 
### Table of Contents
- <a href='#installation-(for-Jupyter-Notebook)'>Installation</a>
- <a href='#imjoy-jupyter-extension'>Imjoy Jupyter Extension</a>
- <a href='#kaibu-jupyter-tutorial'>Kaibu Jupyter Tutorial</a>
- <a href='#vitessce-image-viewer'>Vitessce Image Viewer</a>
- <a href='#compare-images-demo'>Compare Images Demo</a>
- <a href='#micro-manager-imJoy-tutorial'>Micro Manager ImJoy Tutorial</a>
- <a href='#imJoy-plugin-development'>ImJoy Plugin Development</a>
- <a href='#imjoy-interactive-segmentation'>Imjoy Interactive Segmentation</a>
- <a href='#contributing'>Contributing</a>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Installation (for Jupyter Notebook)
If you are using Jupyter NoteBooks, Run:
```bash
conda create --name imjoy-starter python=3.7.2

conda activate imjoy-starter

pip install -r requirements.txt

Jupyter Notebook --port 8080
```

## Imjoy Jupyter Extension
============
This part gives you a brief impression about what tools are available in imjoy, that could ease your image analysis pipeline development.
- You can try the demo here: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/imjoy-team/imjoy-binder-image/master?filepath=imjoy-jupyter-tutorial.ipynb)
- Run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/imjoy-jupyter-tutorial.ipynb)  

![](https://raw.githubusercontent.com/imjoy-team/imjoy-binder-image/master/screenshot-imjoy-notebook.png)

If you want more instructions, find more info [here](https://github.com/imjoy-team/imjoy-jupyter-extension).


## Kaibu Jupyter Tutorial
This part introduces you to kaibu,a web application for visualizing and annotating multi-dimensional images, built with [OpenLayers](https://openlayers.org/) and [itk-vtk-viewer](https://kitware.github.io/itk-vtk-viewer/). You will be able to customize your own image viewer and/or annotatation tool, including 3D images.
You can find more project details on Kaibu [here](https://github.com/imjoy-team/kaibu).
- Run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/Kaibu-jupyter-tutorial.ipynb)


## Vitessce Image Viewer
In this part, you will see implementations of vizarr and [Visual Integration Tool for Exploration of Spatial Single-Cell Experiments (Vitessce)](https://github.com/hubmapconsortium/vitessce) in Imjoy.
- For Vitessce image viewer in Imjoy, run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/vitessce-image-viewer-imjoy.ipynb)
- Imjoy supports vizarr (viewing Zarr-based images), see more in [this repo](https://github.com/hms-dbmi/vizarr) and [try here](https://imjoy.io/#/app?workspace=vizarr&plugin=https://github.com/hms-dbmi/vizarr/blob/master/example/VizarrDemo.imjoy.html)


## Compare Images Demo
In this demo, you will see an implementation in Imjoy that compares images. It supports both 2D and 3D images.
- For the demo, run the [google colab notebook](https://colab.research.google.com/drive/1w3OvjhPGm7rNtWYcSe4nZjkG_9CCMeBS?usp=sharing)
- Or run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/CompareImagesDemo.ipynb)


## Micro Manager ImJoy Tutorial
In this part, we will go through the steps for using ImJoy plugins with MicroManager to control your microscope interactively.
You can run this demo in either of the ways in the following:
- you can run the demo in [MyBinder](https://mybinder.org/v2/gh/imjoy-team/micro-manager-imjoy/master?filepath=Micro-Manager-ImJoy-Tutorial.ipynb)
- Alternatively, you can run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/Micro-Manager-ImJoy-Tutorial.ipynb). You need to
  * If you don't have Micro-Manager installed, download the lastest version of micro-manager 2.0
  * Run Micro-Manager, select tools-options, and check the box that says Run server on port 4827 (you only need to do this once)
  * Set the path to your micromanager installation folder and a config file. Follow the instruction in the notebook for this step


## ImJoy Plugin Development
Now let's go deeper and learn how to build your interactive tool in imjoy with HTML/CSS/Javascript and Python.
You can do your test in
- Follow this [google colab notebook](https://colab.research.google.com/drive/17eQfwRGRxi8BREGnbh7rb2jIr4Lu02CX?usp=sharing)
- or run [this jupyter notebook](https://github.com/imjoy-team/imjoy-starter/tree/master/notebooks/Tutorial-for-ImJoy-plugin-development.ipynb)


## Imjoy Interactive Segmentation
This is a project using imjoy to develop interactive segmentation deep learning models.
You can go to [this repo](https://github.com/imjoy-team/imjoy-interactive-segmentation) to check more into details.

To run the test
- You can run in [google colab](https://colab.research.google.com/github/imjoy-team/imjoy-interactive-segmentation/blob/master/Tutorial.ipynb) (same colab link as in the original repo).
- You can run locally by following the [installation](https://github.com/imjoy-team/imjoy-interactive-segmentation#installation) and then in Jupyter Notebook in the "ImJoy Interactive ML" environment.
- You can also in run [MyBinder](https://mybinder.org/v2/gh/imjoy-team/imjoy-interactive-segmentation/master?filepath=Tutorial.ipynb)

Feel free to adjust/add more functional buttons. Or do you machine learning project at your customization.


## Contributing
We welcome community contributions to implement and improve imjoy, including bug fixes, improvements to documentation.