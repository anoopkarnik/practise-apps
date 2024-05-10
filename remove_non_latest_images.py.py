import docker 

client = docker.from_env()

# Get all images
images = client.images.list()
images_to_remove = [x for x in images if len(x.tags)==0]

for img in images_to_remove:
    try:
        client.images.remove(img.id)
    except Exception as e:
        print(e)
        pass